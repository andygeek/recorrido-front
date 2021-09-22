<template>
  <div class="dashboard-view__container">
    <h1>Este es el dashboard más básico</h1>
    <p>Los datos del usuario</p>
    <p>{{this.$store.state.user}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Dashboard extends Vue {}
</script>
