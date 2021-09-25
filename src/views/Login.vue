<template>
  <div class="login-view__container animate__animated animate__flipInX">
    <div class="login-view__form-block">
      <h2 class="login-view__title-text">Ingresar</h2>
      <div class="login-view__form-container">
        <div class="login-view__input-container">
          <span class="login-view__label-text">Email:</span>
          <input class="login-view__input-text" type="text" v-model="email">
        </div>
        <div class="login-view__input-container">
          <span class="login-view__label-text">Password:</span>
          <input class="login-view__input-text" type="text" v-model="password">
        </div>
        <button class="login-view__submit-button" @click="login">Ingresar</button>
      </div>
    </div>
    <div class="login-view__image-block">
      <div class="login-view__text-description">
        Una nueva experiencia de viajar en Bus
      </div>
      <img class="login-view__ilustration" src="/image/bus_img.png"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BackService from '@/services/BackService'
import 'animate.css';

@Component({})
export default class Login extends Vue {
  email: string = ''
  password: string = ''

  service : BackService | null = null

  created() {
    this.service = new BackService();
  }

  async login() {
    console.log(this.email, this.password);
    try {
      let body = {
        email: this.email,
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
<style scoped>
.login-view__title-text {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 30px;
}
.login-view__label-text {
  font-family: sans-serif;
  letter-spacing: 1px;
}
.login-view__input-container {
  display: flex;
  flex-direction: column;
}
.login-view__form-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.login-view__input-text {
  border: none;
  height: 30px;
  background-color: #ffffffcf;
  width: 80%;
  margin-block: 5px;
  padding-inline: 10px;
  border-radius: 5px;
}
.login-view__container {
  max-width: 90%;
  width: 90%;
  display: flex;
  flex-direction: row;
  background-color: #fbfbfbbf;
  border-radius: 10px;
}
.login-view__form-block {
  width: 50%;
  max-width: 50%;
  padding-block: 60px;
  padding-inline: 30px;
}
.login-view__image-block {
  background-color: #f3f3f3ad;
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  max-width: 50%;
  padding-block: 20px;
  padding-inline: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-view__submit-button {
  width: fit-content;
  padding-inline: 25px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(90deg, rgb(3 81 179) 8%, rgb(114 164 208) 95%);
  cursor: pointer;
}
.login-view__text-description {
  font-size: 20px;
  font-family: system-ui;
  text-align: end;
  width: 80%;
  margin-left: auto;
  color: grey;
}
.login-view__ilustration {
  width: 100%;
}
.login-view__submit-button:hover {
  background: linear-gradient(90deg, rgb(18 68 131) 8%, rgb(38 140 230) 95%);;
}
@media(max-width: 600px){
  .login-view__container {
    display: flex;
    flex-direction: column;
  }
  .login-view__form-block {
    width: 100%;
    max-width: 100%;
    padding: 0px;
  }
  .login-view__title-text {
    padding-inline: 25px;
    margin-bottom: 10px;
  }
  .login-view__form-container {
    padding: 30px;
  }
  .login-view__image-block {
    width: 100%;
    max-width: 100%;
    width: 100%;
    max-width: 100%;
    padding: 0px;
    border-radius: 0px 0px 10px 10px;
    align-items: center;
    padding-block: 25px;
  }
  .login-view__ilustration {
    width: 70%;
  }
  .login-view__text-description {
    padding-block: 20px;
    margin-left: inherit;
  }
}
</style>
