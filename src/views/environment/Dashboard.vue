<template>
  <div class="dashboard-view__container">
    <div class="dashboard_view__content">
      <h1 class="dashboard-view__title">Hola {{ user && user.name }}</h1>
      <h2 class="dashboard-view__subtitle">En esta web puedes crear alerta de precios para cualquier viaje que quieras hacer en bus.</h2>
    </div>
    <button @click="openModal">Crear alerta de precios</button>
    <div v-if="listAlerts" class="alert-price__table">
      <div>{{listAlerts}}</div>
    </div>
    <create-alert-modal :open.sync="createModalOpen"></create-alert-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateAlertModal from '@/components/CreateAlertModal.vue'
import BackService from '@/services/BackService'
import { PriceAlert } from '@/models'

@Component({
  components: {
    CreateAlertModal
  }
})
export default class Dashboard extends Vue {

  createModalOpen : boolean = false
  service : BackService | null = null
  listAlerts : any[] |undefined = []

  openModal() {
    this.createModalOpen = true
  }

  created() {
    let token = this.$store.state["auth"].token
    this.$store.dispatch('auth/dashboard', token)
    this.service = new BackService(token)
  }

  get user() {
    return this.$store.getters['auth/user']
  }

  async mounted() {
    try {
      let response = await this.service?.getPriceAlerts(this.$store.state["auth"].user.id)
      this.listAlerts = response!.data
    } catch (e) {
      console.log(e)
    }
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
    font-family: sans-serif;
  }
  .dashboard-view__subtitle {
    font-weight: 300;
  }
</style>
