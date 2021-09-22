<template>
  <div class="signup-view__container">
    <div>
      <p>name:</p>
      <input type="text" v-model="name">
    </div>
    <div>
      <p>username:</p>
      <input type="text" v-model="username">
    </div>
    <div>
      <p>password</p>
      <input type="text" v-model="password">
    </div>
    <button @click="signup" style="margin-top: 30px;">Registrarse</button>

    <p>name: {{name}}</p>
    <p>username: {{username}}</p>
    <p>password: {{password}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BackService from '@/services/BackService'

@Component({})
export default class Signup extends Vue {
  name: string = ''
  username: string = ''
  password: string = ''

  service : BackService | null = null

  created() {
    this.service = new BackService();
  }

  async signup() {
    console.log(this.name, this.username, this.password);
    try {
      let body = {
        name: this.name,
        username: this.username,
        password: this.password
      }
      let user = await this.service!.signup(body)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
