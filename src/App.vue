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
body {
  margin: 0px;
}
.recorrido-app__container {
  background-image: url(https://www.wallpapertip.com/wmimgs/81-817636_mountain-road-background.jpg);
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.recorrido-app__content {
  width: 900px;
}
.recorrido-body__container {
  height: calc(100% - 100px);
}
</style>
