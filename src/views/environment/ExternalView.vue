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
import { Component, Vue, Prop } from 'vue-property-decorator';
import BackService from "@/services/BackService";
import moment from 'moment'

@Component({
  components: {
    
  }
})
export default class ExternalView extends Vue {
  @Prop({ type: String, default: '' }) origin !: string
  @Prop({ type: String, default: '' }) destiny !: string
  @Prop({ type: String, default: '' }) date !: string



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
    #app main[role="main"] {
      margin-top: 300px;
    }
    `
    let body = {
      web: {
        origin: this.origin,
        destiny: this.destiny,
        date: moment(this.date, "YYYY-MM-DD").format("DD-MM-YYYY").toString()
      }
    }

    let response : any = await this.service?.getWebPage(body)
    this.htmlBody = response.data
  }

  beforeDestroy() {
    const style = document.getElementById('customCSS') as HTMLStyleElement
    style.innerText = ''
  }

}
</script>