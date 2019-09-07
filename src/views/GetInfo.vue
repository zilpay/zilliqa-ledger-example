<template>
  <div>
    <Form
      v-model="index"
      :type="form.type"
      :placeholder="form.placeholder"
      :value="form.value"
      :lable="form.lable">
      <Button @click.native="onClick">{{btnText}}</Button>
    </Form>
  </div>
</template>

<script>
import Button from '../components/Button'
import Form from '../components/Form'

export default {
  name: 'GetInfo',
  props: {
    btnText: String,
    form: Object
  },
  components: {
    Button,
    Form
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    onClick() {
      this.$emit('call', this.index)
    }
  }
}
</script>

<style>

</style>