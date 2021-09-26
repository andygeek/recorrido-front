<template>
  <div class="select-field__container">
    <span class="select-field__label">{{name}}:</span>
    <select class="select-field__input" name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class SelectField extends Vue {
  @Prop({ type: String, required: true }) name !: String


}
</script>
<style scoped>
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
  width: 300px;
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