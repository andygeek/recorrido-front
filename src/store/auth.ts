import { RootState } from '@/store/index'
import { Module } from 'vuex'
import { User } from '@/models/'
import router from '../router'


export interface AuthState {
  token ?: string
  user ?: User
}

export interface LoginPayload {
  email : string
  password : string
}

const AuthModule : Module<AuthState, RootState> = {
  namespaced: true,
  state: {
    token: '',
    user: undefined,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setUser (state, payload) {
      let user: User = {
        id: payload.id,
        name: payload.name,
        email: payload.email,
      }
      state.user! = user
    },
    logout() {
      localStorage.removeItem('token')
      location.reload()
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        const res = await fetch(process.env.VUE_APP_BACKBASE + '/users/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(user)
        })
        const userDB = await res.json()
        commit('setToken', userDB.token)
        commit('setUser', { id: userDB.id, name: userDB.name, email: userDB.email })
        localStorage.setItem('token', userDB.token)
        router.push('/dashboard')
      } catch(e) {
        console.log('Error: ', e)
      }
    },
    async signup({ commit }, user ) {
      try {
        const res = await fetch(process.env.VUE_APP_BACKBASE + '/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },  
          body: JSON.stringify(user)
        })
        const userDB = await res.json()
        commit('setToken', userDB.token)
        commit('setUser', { id: userDB.id, name: userDB.name, email: userDB.email })
        localStorage.setItem('token', userDB.token)
        router.push('/dashboard')
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    async dashboard({ commit }, auth_token) {
      try {
        const res = await fetch(process.env.VUE_APP_BACKBASE + '/users/dashboard',  {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': auth_token
          },
        })
        const userDB = await res.json()
        commit('setUser', { id: userDB.id, name: userDB.name, email: userDB.email })
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    getToken({commit}) {
      if(localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
        router.push('/dashboard')
      } else {
        commit('setToken', null)
      }
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  getters: {
    token(state) {
      return state.token
    },
    user(state) {
      return state.user
    }
  }
}

export default AuthModule