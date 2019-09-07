<template>
  <div class="input-group mb-3 p-3">
    <div class="input-group-prepend">
      <span
        class="input-group-text"
        :id="uuid"
      >{{lable}}</span>
    </div>
    <input
      class="form-control"
      v-model="inputValue"
      @change="onInput"
      :type="type"
      :placeholder="placeholder"
      :for="uuid"
    ><slot /></div>
</template>

<script>
import uuidv4 from 'uuidv4'

export default {
  name: 'Form',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    lable: String,
    placeholder: String,
    value: String | Number
  },
  data() {
    return {
      uuid: uuidv4(),
      inputValue: null
    }
  },
  methods: {
    onInput(event) {
      let { value } = event.target

      if (!isNaN(value)) {
        value = Number(value)
      }

      if (typeof value !== 'undefined') {
        this.$emit('input', value)
      }
    }
  },
  mounted() {
    this.inputValue = this.value
  }
}
</script>

<style>

</style>