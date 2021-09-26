<template>
  <div class="number-field__container">
    <span class="number-field__label">{{name}}:</span>
    <input class="number-field__input" type="search" v-model="write">
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class NumberField extends Vue {
  @Prop({ type: String, required: true }) name !: String

  value : string = ''

  set write(v: any) {
    this.$emit('update:write', v)
    this.value = v
  }

  get write() {
    return this.value
  }
}
</script>
<style scoped>
.number-field__label {
  font-family: sans-serif;
  letter-spacing: 1px;
  color: #3e3838;
}
.number-field__container {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.number-field__input {
  border: none;
  height: 30px;
  background-color: #ffffffcf;
  width: 300px;
  margin-block: 5px;
  padding-inline: 10px;
  border-radius: 5px;
}
.number-field__input:focus{
  outline: none;
}
</style>