<template>
  <div class="dashboard-view__container">
    <h1>Este es el dashboard más básico</h1>
    <p>Los datos del usuario</p>
    <p>{{this.$store.state.user}}</p>
    <template v-if="this.$store.state.user.email">
      
      <input type="text" v-model="name">
      <input type="text" v-model="originId">
      <input type="text" v-model="destinyId">
      <input type="text" v-model="classId">
      <input type="text" v-model="price">

      <button @click="createAlert">Crear alerta de precio</button>
      <p>Lista de alertas creadas de {{this.$store.state.user.name}}</p>
      <template v-for="(e, i) in listAlerts">
        <p :key="i">{{e}}</p>
      </template>
      <button @click="getAlerts">Actualizar</button>
      
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BackService from '@/services/BackService'

@Component({})
export default class Dashboard extends Vue {
  name : string = ''
  originId : number = 0
  destinyId : number = 0
  classId : number = 0
  price : number = 0.0

  service : BackService | null = null

  listAlerts = []

  created() {
    this.service = new BackService();
  }

  async createAlert() {
     try {
      let body = {
        name: this.name,
        origin_id: this.originId,
        destiny_id: this.destinyId,
        class_id: this.classId,
        price: this.price,
        user_id: this.$store.state.user.id
      }
      // Save user in Vuex State
      let priceAlert = await this.service!.createPriceAlert(body)
      console.log(priceAlert)
    } catch (error) {
      console.log(error)
    }
  }

  async getAlerts() {
    try {
      let priceAlertList = await this.service!.getPriceAlerts(this.$store.state.user.id)
      this.listAlerts = priceAlertList.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
