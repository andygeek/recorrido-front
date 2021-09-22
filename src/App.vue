<template>
  <div id="app" class="recorrido-app__container">
    <div class="recorrido-app__content">
      <view-navbar></view-navbar>
      <div class="recorrido-body__container">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ViewNavbar from '@/components/views/Navbar.vue'

@Component({
  components: {
    ViewNavbar
  }
})
export default class App extends Vue {

}
</script>

<style>
a {
  text-decoration: none !important;
}
.recorrido-app__container {
  display: flex;
  justify-content: center;
}
.recorrido-app__content {
  width: 900px;
}
</style>
