<template>
  <div class="home-view__container">
    <div class="home-view__text-container">
      <h1 class="home-view__text-welcome">
        Con recorrido.cl puedes crear tu alerta de precios en unos segundos.
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>
<style scoped>
.home-view__container {
  display:flex;
  justify-content:center;
  height:100%;
}
.home-view__text-container {
  width: 60%;
  display: flex;
  align-items: center;
}
.home-view__text-welcome {
  color: white;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: #0000004d;
  padding: 10px;
}
</style>
