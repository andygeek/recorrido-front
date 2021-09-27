<template>
  <div class="select-field__container">
    <span class="select-field__label">{{name}}:</span>
    <v-select v-model="selection" label="name" :options="list"></v-select>    
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { City } from '@/models/City'

@Component({})
export default class SelectField extends Vue {
  @Prop({ type: String, required: true }) name !: String
  @Prop({ type: Array, required: false }) list !: Array<City>
  @Prop({ type: Object, required: false }) value !: any

  set selection(v: any) {
    console.log('x', v)
    this.$emit('update:select', v)
  }

  get selection() {
    return this.value
  }

}
</script>
<style scoped>
.v-select {
  width: 300px;
  background-color: white;
  border: none;
}
.select-field__container {
  display: flex;
  flex-direction: column;
  width: fit-content;

}
.select-field__input {
  border: none;
  background-color: white;
  height: 30px;
  border-radius: 5px;
  padding-inline: 10px;
  margin-block: 5px;
  width: 280px;
}
.select-field__input:focus{
    outline: none;
}
.select-field__label {
  font-family: sans-serif;
  letter-spacing: 1px;
  color: #3e3838;
}
</style>