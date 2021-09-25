<template>
  <div class="signup-view__container animate__animated animate__flipInX">
    <div class="signup-view__form-block">
      <h2 class="signup-view__title-text">Regístrate</h2>
      <div class="signup-view__form-container">
        <div class="signup-view__input-container">
          <span class="signup-view__label-text">Nombre:</span>
          <input class="signup-view__input-text" type="text" v-model="name">
        </div>
        <div class="signup-view__input-container">
          <span class="signup-view__label-text">Email:</span>
          <input class="signup-view__input-text" type="text" v-model="email">
        </div>
        <div class="signup-view__input-container">
          <span class="signup-view__label-text">Password:</span>
          <input class="signup-view__input-text" type="text" v-model="password">
        </div>
        <button class="signup-view__submit-button" @click="signup">Registrarse</button>
      </div>
    </div>
    <div class="signup-view__image-block">
      <div class="signup-view__text-description">
        Crea tu cuenta gratis y comienza a gozar de todos los beneficios.
      </div>
      <img class="signup-view__ilustration" src="/image/bus_img.png"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BackService from '@/services/BackService'

@Component({})
export default class Signup extends Vue {
  name: string = ''
  email: string = ''
  password: string = ''

  service : BackService | null = null

  created() {
    this.service = new BackService();
  }

  async signup() {
    let body = { user: { name: this.name, email: this.email, password: this.password } }
    await this.$store.dispatch('auth/signup', body)
  }
}
</script>
<style>
.signup-view__title-text {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 30px;
}
.signup-view__label-text {
  font-family: sans-serif;
  letter-spacing: 1px;
}
.signup-view__input-container {
  display: flex;
  flex-direction: column;
}
.signup-view__form-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.signup-view__input-text {
  border: none;
  height: 30px;
  background-color: #ffffffcf;
  width: 80%;
  margin-block: 5px;
  padding-inline: 10px;
  border-radius: 5px;
}
.signup-view__container {
  max-width: 90%;
  width: 90%;
  display: flex;
  flex-direction: row-reverse;
  background-color: #fbfbfbbf;
  border-radius: 10px;
}
.signup-view__form-block {
  width: 50%;
  max-width: 50%;
  padding-block: 60px;
  padding-inline: 30px;
}
.signup-view__image-block {
  background-color: #f3f3f3ad;
  border-radius: 10px 0px 0px 10px;
  width: 50%;
  max-width: 50%;
  padding-block: 20px;
  padding-inline: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.signup-view__submit-button {
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
.signup-view__text-description {
  font-size: 20px;
  font-family: system-ui;
  text-align: start;
  width: 80%;
  color: grey;
}
.signup-view__ilustration {
  width: 100%;
}
.signup-view__submit-button:hover {
  background: linear-gradient(90deg, rgb(18 68 131) 8%, rgb(38 140 230) 95%);;
}
@media(max-width: 600px){
  .signup-view__container {
    display: flex;
    flex-direction: column;
  }
  .signup-view__form-block {
    width: 100%;
    max-width: 100%;
    padding: 0px;
  }
  .signup-view__title-text {
    padding-inline: 25px;
    margin-bottom: 10px;
  }
  .signup-view__form-container {
    padding: 30px;
  }
  .signup-view__image-block {
    width: 100%;
    max-width: 100%;
    width: 100%;
    max-width: 100%;
    padding: 0px;
    border-radius: 10px 0px 0px 10px;
    align-items: center;
    padding-block: 25px;
  }
  .signup-view__ilustration {
    width: 70%;
  }
  .signup-view__text-description {
    padding-block: 20px;
    margin-left: inherit;
  }
}
</style>
