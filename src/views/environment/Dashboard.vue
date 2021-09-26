<template>
  <div class="dashboard-view__container">
    <div class="dashboard_view__content">
      <h1 class="dashboard-view__title">Hola {{ user && user.name }}</h1>
      <h2 class="dashboard-view__subtitle">
        En esta web puedes crear alerta de precios para cualquier viaje que
        quieras hacer en bus.
      </h2>
      <div class="dashboard-view__button-container">
        <button @click="openModal" class="dashboard-view__button">
          Crear alerta de precios
        </button>
      </div>
      <table cellspacing="0" cellpadding="0" class="dashboard-view__table" v-if="listAlerts">
        <thead class="dashboard-view__table-header">
          <tr>
            <th>Nombre</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Clase</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody class="dashboard-view__table-body">
          <template v-for="(alert, i) in listAlerts">
            <tr :key="i">
              <td>{{alert.name}}</td>
              <td>{{alert.origin_id}}</td>
              <td>{{alert.destiny_id}}</td>
              <td>{{alert.class_id}}</td>
              <td>{{alert.price}}</td>
              <td class="table-body__actions-container">
                <div @click="toAlertDetail(alert.id)" class="alert-row__action-show">
                  <img src="/image/search.png" alt="">
                </div>
                <div class="alert-row__action-remove">
                  <img src="/image/remove.png" alt="">
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <create-alert-modal :open.sync="createModalOpen"></create-alert-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreateAlertModal from "@/components/CreateAlertModal.vue";
import BackService from "@/services/BackService";
import router from "@/router";

@Component({
  components: {
    CreateAlertModal,
  },
})
export default class Dashboard extends Vue {
  createModalOpen: boolean = false;
  service: BackService | null = null;
  listAlerts: any[] | undefined = [];

  openModal() {
    this.createModalOpen = true;
  }

  created() {
    let token = this.$store.state["auth"].token;
    this.$store.dispatch("auth/dashboard", token);
    this.service = new BackService(token);
  }

  get user() {
    return this.$store.getters["auth/user"];
  }

  async mounted() {
    try {
      let response = await this.service?.getPriceAlerts(
        this.$store.state["auth"].user.id
      );
      this.listAlerts = response!.data;
    } catch (e) {
      console.log(e);
    }
  }

  toAlertDetail(id_alert : string) {
    router.push({ name: 'Alert', params: { id: id_alert } })
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
.dashboard-view__button {
  border: none;
  height: 30px;
  border-radius: 5px;
  width: fit-content;
  padding-inline: 20px;
  font-size: 15px;
  padding-block: 5px;
  cursor: pointer;
  background: linear-gradient(90deg, rgb(3 81 179) 8%, rgb(114 164 208) 95%);
  color: white;
}
.dashboard-view__button:hover {
  background: linear-gradient(90deg, rgb(18 68 131) 8%, rgb(38 140 230) 95%);
}
.dashboard-view__button-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
.dashboard-view__table {
  width: 100%;
  border: 2px solid #4882d3b8;
  background-color: #ffffffc7;
}
.dashboard-view__table-header {
  background-color: #0f60b4;
  color: white;
  height: 40px;
}
.dashboard-view__table-body tr {
  height: 35px;
}
.dashboard-view__table-body > tr:nth-child(2n+1) {
  background-color: #013fa229;
}
.dashboard-view__table-body tr td {
  padding-inline: 10px;
}
.dashboard-view__table-body tr > td:nth-child(n+2) {
  text-align: center;
}
.alert-row__action-show {
  cursor: pointer;
}
.alert-row__action-remove {
  cursor: pointer;
}
.table-body__actions-container {
  height: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
