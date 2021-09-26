<template>
  <div v-if="!user">
    Cargando...
  </div>
  <dashboard v-else></dashboard>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dashboard from '@/views/environment/Dashboard.vue'

@Component({
  components: {
    Dashboard
  }
})
export default class DashboardRoot extends Vue {

  created() {
    let token = this.$store.state["auth"].token
    this.$store.dispatch('auth/dashboard', token)
  }

  get user() {
    return this.$store.state["auth"].user
  }
}
</script>