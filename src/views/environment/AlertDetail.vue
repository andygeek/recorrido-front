<template>
  <div class="alert-details__container">
    <div class="alert-details__data-container">
      <div class="alert-detail__info-container">
        <div class="alert-detail__title-text">{{alert.name}}</div>
        <div class="alert-detail__info-content">
          <div class="alert-detail__info-text">
            <div class="alert-detail__info-label">Origen:</div>
            <div class="alert-detail__info-text">{{alert.origin_id}}</div>
          </div>
          <div class="alert-detail__info-text">
            <div class="alert-detail__info-label">Destino:</div>
            <div class="alert-detail__info-text">{{alert.destiny_id}}</div>
          </div>
          <div class="alert-detail__info-text">
            <div class="alert-detail__info-label">Clase:</div>
            <div class="alert-detail__info-text">{{alert.class_id}}</div>
          </div>
          <div class="alert-detail__info-text">
            <div class="alert-detail__info-label">Precio:</div>
            <div class="alert-detail__info-text">{{alert.price}}</div>
          </div>
        </div>
      </div>
      <div class="alert-detail__chart-container">
        <canvas class="chart" height="50" width="100" ref="chartjsCanvas"></canvas>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { PriceAlert } from "@/models/PriceAlert"
import { Chart as Chartjs, registerables  } from 'chart.js'

@Component({
  components: {},
})
export default class AlertDetail extends Vue {
  @Prop({ type: Object, default: '' }) alert !: PriceAlert

  mounted() {
    console.log(this.alert)
    this.renderChart()
  }

  myChart : any = null
  chartData : any = { labels: ['a', 'b'], datasets: [{label: 'a', data: 5}, {label: 'b', data: 6}] }
  chartOptions : any

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
</style>