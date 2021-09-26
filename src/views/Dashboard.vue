<template>
  <div class="dashboard-view__container">
    <div class="dashboard_view__content">
      <h1>Hola {{this.$store.state['auth'].user.name}}</h1>
      <h2>En esta web puedes crear alerta de precios para cualquier viaje que quieras hacer en bus.</h2>
    </div>
    <div>
      <input placeholder="name" type="text">
    </div>
    <button>Crear alerta de precios</button>
    <div class="alert-price__table">
      <div>alerta de precios: 111</div>
    </div>  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Dashboard extends Vue {
  name : string = ''
  originId : number = 0
  destinyId : number = 0
  classId : number = 0
  price : number = 0.0

  listAlerts = []

  created() {
    let token = this.$store.state["auth"].token
    this.$store.dispatch('auth/dashboard', token)
  }

}
</script>
<style scoped>
  .dashboard-view__container {
    background-color: #ffffffb5;
    height: 90%;
    width: 100%;
    border-radius: 10px;
  }
  .dashboard_view__content {
    margin: 20px;
  }
</style>
