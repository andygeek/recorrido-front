<template>
  <div class="select-field__container">
    <span class="select-field__label">{{name}}:</span>
    <input class="select-field__input" list="brow">
    <datalist id="brow">
      <option value="volvo"></option>
      <option value="saab"></option>
      <option value="mercedes"></option>
      <option value="audi"></option>
    </datalist>
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