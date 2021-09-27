<template>
  <div class="string-field__container">
    <span class="string-field__label">{{name}}:</span>
    <input class="string-field__input" type="search" v-model="currentValue">
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class NumberField extends Vue {
  @Prop({ type: String, required: true }) name !: string
  @Prop({ type: String, required: false }) value !: string

  get currentValue () {
    return this.value
  }

  set currentValue (value : string) {
    this.$emit('update:write', value)
  }
}
</script>
<style scoped>
.string-field__label {
  font-family: sans-serif;
  letter-spacing: 1px;
  color: #3e3838;
}
.string-field__container {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.string-field__input {
  border: none;
  height: 30px;
  background-color: #ffffffcf;
  width: 300px;
  margin-block: 5px;
  padding-inline: 10px;
  border-radius: 5px;
}
.string-field__input:focus{
    outline: none;
}
</style>