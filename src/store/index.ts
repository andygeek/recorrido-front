import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './auth'

Vue.use(Vuex)

export interface RootState {
  version: string
  auth?: any
}

const initialState : RootState = {
  version: '1.0.0',
}

export default new Vuex.Store({
  state: initialState,
  modules: {
    auth: AuthModule
  }
})
