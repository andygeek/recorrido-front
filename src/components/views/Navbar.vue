<template>
  <nav class="navbar__container">
    <ul class="navbar-options__container">
      <div class="navbar-logo__container">
        <router-link to="/">
          <span class="navbar-logo__text-logo">recorrido.cl</span>
        </router-link>
      </div>
      <li class="navbar-item" v-if="activeSession">
        <router-link to="/login">Ingresar</router-link>
      </li>
      <li class="navbar-item" v-if="activeSession">
        <router-link to="/signup">Registrarse</router-link>
      </li>
      <li class="navbar-item" v-if="!activeSession">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li class="navbar-item" v-if="!activeSession">
        <button class="navbar-item__button" @click="logout">Cerrar Sesion</button>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ViewNavbar extends Vue {

  get activeSession() {
    if ( this.$store.state["auth"].user == undefined ||
      ( this.$store.state["auth"].user.name == undefined &&
      this.$store.state["auth"].user.email == undefined )) return true
    return false
  }

  logout() {
    this.$store.dispatch('auth/logout')
  }
}
</script>
<style scoped>
  .navbar-options__container {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .navbar-logo__container {
    flex: 1;
  }
  .navbar-logo__text-logo {
    font-weight: bold;
    font-size: 30px;
    color: white;
  }
  .navbar-item {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .navbar-item__button {
    color: white;
    background-color:#ffffff2e;
    border-radius: 6px;
    padding-inline: 10px;
    padding-block: 3px;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 15px;
    border: none;
    padding-block: 4px;
  }
  .navbar-item__button:hover {
    background-color:#ffffff4d;
  }
</style>