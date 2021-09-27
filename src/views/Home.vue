<template>
  <div class="home-view__container">
    <div class="home-view__text-container">
      <h1 class="home-view__text-welcome">
        Con <span class="recorrido-text">recorrido.cl</span> puedes crear tu alerta de precios en unos segundos. La tecnología al servicio de tus viajes.
      </h1>
      <img src="/image/bus_img.png" alt="">
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
  align-items: center;
  height:100%;
}
.home-view__text-container {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffffb8;
  border-radius: 8px;
}
.home-view__text-welcome {
  width: 80%;
  color: #242424;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 25px;
  padding: 10px;
}
img {
  height: 300px;
}
.recorrido-text {
  color: #04b7bf;
}
</style>
