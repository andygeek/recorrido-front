<template>
  <div class="login-view__container">
    <div>
      <p>username:</p>
      <input type="text" v-model="username">
    </div>
    <div>
      <p>password</p>
      <input type="text" v-model="password">
    </div>
    <button @click="login" style="margin-top: 30px;">Ingresar</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BackService from '@/services/BackService'

@Component({})
export default class Login extends Vue {
  username: string = ''
  password: string = ''

  service : BackService | null = null

  created() {
    this.service = new BackService();
  }

  async login() {
    console.log(this.username, this.password);
    try {
      let body = {
        username: this.username,
        password: this.password
      }
      // Save user in Vuex State
      let user = await this.service!.login(body)
      console.log(user)
      this.$store.commit('setUser', user.data)
    } catch (error) {
      console.log(error)
    }
  }

}
</script>
