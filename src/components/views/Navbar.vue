<template>
  <nav class="navbar__container">
    <ul class="navbar-options__container">
      <div class="navbar-logo__container">
        <router-link to="/">
          <span class="navbar-logo__text-logo">recorrido.cl</span>
        </router-link>
      </div>
      <li class="navbar-item">
        <router-link to="/login">Ingresar</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/signup">Registrarse</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ViewNavbar extends Vue {

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
</style>
<style>
  .navbar-item a {
    color: white;
    background-color:#ffffff2e;
    border-radius: 6px;
    padding-inline: 10px;
    padding-block: 3px;
  }
  .navbar-item a:hover {
    background-color:#ffffff4d;
  }
</style>