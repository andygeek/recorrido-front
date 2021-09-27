<template>
  <div class="alert-details__container">
    <div class="alert-details__data-container">
      <div class="alert-detail__info-container">
        <div class="alert-detail__title-text">{{alert.name}}</div>
        <div class="alert-detail__info-content">
          <div class="alert-detail__info-text">
            <div class="alert-detail__info-label">Origen:</div>
            <div class="alert-detail__info-text">{{alert.origin_name}}</div>
          </div>
          <div class="alert-detail__info-text">
            <div class="alert-detail__info-label">Destino:</div>
            <div class="alert-detail__info-text">{{alert.destiny_name}}</div>
          </div>
          <div class="alert-detail__info-text">
            <div class="alert-detail__info-label">Clase:</div>
            <div class="alert-detail__info-text">{{alert.class_name}}</div>
          </div>
          <div class="alert-detail__info-text">
            <div class="alert-detail__info-label">Precio:</div>
            <div class="alert-detail__info-text">{{alert.price}}</div>
          </div>
          <div class="alert-detail__info-text">
            <div class="alert-detail__info-label">Fecha de Creación:</div>
            <div class="alert-detail__info-text">{{dateCreated}}</div>
          </div>
        </div>
      </div>
      <div class="alert-detail__chart-container">
        <canvas class="chart" height="50" width="100" ref="chartjsCanvas"></canvas>
      </div>
    </div>
    <div class="alert-detail__table-container">
      <table cellspacing="0" cellpadding="0" class="alert-detail__table">
        <thead class="alert-detail__table-header">
          <tr>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Clase</th>
            <th>Precio Mínimo</th>
            <th>Empresa de bus</th>
          </tr>
        </thead>
        <tbody class="alert-detail__table-body">
          <template v-for="(min, i) in listMinPrices">
            <tr @click="loadExternal(min.date_departure)" :key="i" :class="{'active' : min.min_price < alert.price ? true : false}">
              <td>{{min.date_departure}}</td>
              <td>{{min.hour.split("T")[1].split(".")[0]}}</td>
              <td>{{min.class_name}}</td>
              <td>{{min.min_price}}</td>
              <td>{{min.buss_operator_name}}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { PriceAlert } from "@/models/PriceAlert"
import { Chart as Chartjs, registerables  } from 'chart.js'
import BackService from "@/services/BackService";
import router from "@/router";
import moment from 'moment'

@Component({
  components: {},
})
export default class AlertDetail extends Vue {
  @Prop({ type: Object, default: '' }) alert !: PriceAlert

  service : BackService | null = null
  listMinPrices = []
  getDataBucle : any
  myChart : any = null
  chartData : any = []
  chartOptions : any = {
    scales: { 
      x: { ticks: { color: 'black', font: { size: 13 } } },
      y: { ticks: { color: 'black', font: { size: 14 } } } },
    plugins: {
      legend: { display: false }, tooltip: { enabled: false } } }


  created() {
    let token = this.$store.state["auth"].token;
    this.service = new BackService(token)
  }

  async updateTable() {
    let response : any = await this.service?.getMinPrice(this.alert.id!)
    this.listMinPrices = response.data
    this.chartData = { labels: this.labels, datasets: this.dataset }
  }

  mounted() {
    this.renderChart()
    this.updateTable()
    // Update every 5 minutes
    this.getDataBucle = setInterval(this.updateTable, 300000)
  }

  beforeDestroy() {
    // Clean interval
    clearInterval(this.getDataBucle)
    this.getDataBucle = undefined
  }

  loadExternal(date: string) {
    router.push({ name: 'External' , params: { origin: this.alert.origin_url_name, destiny: this.alert.destiny_url_name, date: date } })
  }

  get labels() {
    let dates = []
    let dateStr = this.alert.created_at?.split("T")[0]
    let dateCreated = moment(dateStr, "YYYY-MM-DD")
    dates.push(dateCreated.format("YYYY-MM-DD").toString())
    for (let index = 0; index < 6; index++) {
      dateCreated.add(1, 'days')
      dates.push(dateCreated.format("YYYY-MM-DD").toString())
    }
    return dates
  }

  get dataset() {
    let dataArray :any[] = []
    if (this.listMinPrices.length > 0) {
      this.labels.forEach( (e, i) => {
        let dateForLabel : any = this.listMinPrices.find((el:any) => el.date_departure == e )
        if (dateForLabel) dataArray.push(dateForLabel.min_price)
      })
    }
    return [{
      label: "Precios mínimos",
      data: dataArray,
      borderColor: 'rgb(75, 192, 192)'
    }]
  }

  @Watch('chartData')
  renderChart(){
    Chartjs.register(...registerables);
    if (this.myChart) this.myChart.destroy()
      const chartjsCanvas = this.$refs.chartjsCanvas as HTMLCanvasElement
      this.myChart = new Chartjs(chartjsCanvas, {
      type: 'line',
      data: this.chartData,
      options: this.chartOptions
    });
  }

  get dateCreated() {
    let created = this.alert.created_at?.split("T")[0]  
    return moment(created, "YYYY-MM-DD").format("YYYY-MM-DD").toString()
  }
}
</script>
<style scoped>
.alert-details__container {
  background-color: #ffffffbf;
  height: 90%;
  width: 100%;
  border-radius: 8px;
}
.alert-details__data-container {
  display: flex;
  padding: 20px;
}
.alert-detail__info-container {
  width: 30%;
}
.alert-detail__chart-container {
  width: 70%;
  max-width: 70%;
}
.alert-detail__title-text {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
}
.alert-detail__info-text {
  font-family: sans-serif;
  display: flex;
  gap: 10px;
}
.alert-detail__info-label {
  font-weight: bold;
  font-family: sans-serif;
}
.alert-detail__info-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
.alert-detail__table-container {
  margin: 20px;
}
.alert-detail__table {
  width: 100%;
  border: 2px solid #4882d3b8;
  background-color: #ffffffc7;
}
.alert-detail__table-header {
  background-color: #0f60b4;
  color: white;
  height: 40px;
}
.alert-detail__table-body tr td{
  text-align: center;
}
.alert-detail__table-body tr {
  height: 35px;
}
.alert-detail__table-body > tr.active {
  background-color: #cddc39;
}
</style>