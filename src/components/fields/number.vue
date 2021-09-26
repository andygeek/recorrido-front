<template>
  <div class="string-field__container">
    <span>{{name}}:</span>
    <input type="text">
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class NumberField extends Vue {
  @Prop({ type: String, required: true }) name !: String

}
</script>