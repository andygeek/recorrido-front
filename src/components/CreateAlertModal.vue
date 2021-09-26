<template>
  <transition name="modal--fade">
    <div class="create-modal__backdrop"  v-if="modalOpen">
      <div
        class="create-modal__container"
        role="dialog"
      >
        <header class="create-modal__header">
          <div class="create-modal__title">Crear alerta de precio</div>
          <button type="button" class="create-modal__button-close" @click="closeModal">X</button>
        </header>
        <div class="create-modal__body">
          <string-field name="Nombre"></string-field>
          <select-field name="Origen"></select-field>
          <select-field name="Destino"></select-field>
          <select-field name="Clase"></select-field>
          <number-field name="Precio"></number-field>
        </div>
        <div class="create-modal__footer">
          <button class="create-modal__button">Crear</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SelectField from './fields/select.vue'
import StringField from './fields/string.vue'
import NumberField from './fields/string.vue'

@Component({
  components: {
    SelectField,
    StringField,
    NumberField
  }
})
export default class CreateAlertModal extends Vue {
  @Prop({ type: Boolean, required: true }) open !: boolean
  @Prop({ type: String, required: false }) title !: String

  get modalOpen () {
    return this.open
  }

  set modalOpen (v : boolean) {
    this.$emit('update:open', v)
  }

  closeModal() {
    this.modalOpen = false
  }
}
</script>
<style scoped>
.create-modal__backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.create-modal__container {
  width: 700px;
  right: auto;
  left: auto;
  top: auto;
  bottom: auto;
  background: #ebebebed;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding-left: 30px;
  padding-right: 30px;
}
.create-modal__header {
  margin-top: 30px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
}
.create-modal__title {
  font-size: 25px;
  position: relative;
  width: 100%;
  text-align: start;
  font-family: system-ui;
}
.create-modal__button-close {
  right: 0px;
  position: absolute;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
  outline: none;
}
.create-modal__body {
  display: flex;
  position: relative;
  padding: 20px 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;
}
.create-modal__button {
  border: none;
  height: 30px;
  border-radius: 5px;
  width: fit-content;
  padding-inline: 20px;
  font-size: 15px;
  padding-block: 5px;
  cursor: pointer;
  background: linear-gradient(90deg, rgb(3 81 179) 8%, rgb(114 164 208) 95%);
  color: white;
}
.create-modal__button:hover {
  background: linear-gradient(90deg, rgb(18 68 131) 8%, rgb(38 140 230) 95%);;
}
.create-modal__footer {
  padding-inline: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: end;
}
</style>