<template>
  <div class="dashboard-view__container">
    <h1>Ruta protegida</h1>
    <h2>User</h2>
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
