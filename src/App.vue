<template>
  <div id="app" class="recorrido-app__container">
    <div class="recorrido-app__content">
      <div id="nav" class="recorrido-navbar__container">
        <router-link to="/">recorrido.cl</router-link>
        <router-link to="/login">Ingresar</router-link>
        <router-link to="/signup">Registrarse</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
      </div>
      <div class="recorrido-body__container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
.recorrido-app__container {
  display: flex;
  justify-content: center;
}
.recorrido-app__content {
  width: 900px;
}
</style>
