<template>
  <div>
    <div v-if="!htmlBody">
      Cargando...
    </div>
    <div v-else>
      <div v-html="htmlBody"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BackService from "@/services/BackService";

@Component({
  components: {
    
  }
})
export default class ExternalView extends Vue {

  service : BackService | null = null
  htmlBody : any = null

  created() {
    this.service = new BackService(this.$store.state["auth"].token)
  }

  async mounted() {
    const style = document.getElementById('customCSS') as HTMLStyleElement
    style.innerText = `
    .recorrido-app__container {
      background-image: none !important;
      background-color: #e4e4e4;
    }
    .navbar__container {
      display: none;
    }
    .navbar {
      background-color: #18cfd7;
    }
    .container-fluid {
      background-color: white;
    }
    `
    let response : any = await this.service?.getWebPage()
    this.htmlBody = response.data
  }

  beforeDestroy() {
    const style = document.getElementById('customCSS') as HTMLStyleElement
    style.innerText = ''
  }

}
</script>