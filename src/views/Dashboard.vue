<template>
  <div class="dashboard-view__container">
    <div class="dashboard_view__content">
      <h2>En esta web puedes crear alerta de precios para cualquier viaje que quieras hacer en bus.</h2>
    </div>
    <button @click="openModal">Crear alerta de precios</button>
    <div class="alert-price__table">
      <div>alerta de precios: 111</div>
    </div>
    <create-alert-modal :open.sync="createModalOpen"></create-alert-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateAlertModal from '@/components/CreateAlertModal.vue'

@Component({
  components: {
    CreateAlertModal
  }
})
export default class Dashboard extends Vue {

  createModalOpen : boolean = false
  listAlerts = []


  openModal() {
    this.createModalOpen = true
  }

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
