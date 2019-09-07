<template>
  <div>
    <Form
      v-for="form of forms" :key="form.uuid"
      v-model="form.value"
      :type="form.type"
      :placeholder="form.placeholder"
      :value="form.value"
      :lable="form.lable">
    </Form>

    <tree-view
      class="p-5"
      :data="data.value"
      :options="treeViewOptions"
    />

    <Button
      @click.native="send"
      className="btn-primary btn-lg btn-block"
    >
      {{buttonText.value}}
    </Button>
  </div>
</template>

<script>
import uuidv4 from 'uuidv4'
import Button from '../components/Button'
import Form from '../components/Form'
import txParams from '../static/tx.json'

export default {
  name: 'Tx',
  components: {
    Form,
    Button
  },
  data() {
    return {
      keysParams: Object.keys(txParams),
      forms: {
        index: {
          type: 'number',
          placeholder: 'network version',
          value: 0,
          lable: 'hwIndex:',
          uuid: uuidv4()
        },
        version: {
          type: 'number',
          placeholder: 'network version',
          value: txParams.version,
          lable: 'version:',
          uuid: uuidv4()
        },
        nonce: {
          type: 'number',
          placeholder: 'address nonce',
          value: txParams.nonce,
          lable: 'nonce:',
          uuid: uuidv4()
        },
        toAddr: {
          type: 'string',
          placeholder: 'change to address',
          value: txParams.toAddr,
          lable: 'to address:',
          uuid: uuidv4()
        },
        amount: {
          type: 'string',
          placeholder: 'send amount',
          value: txParams.amount,
          lable: 'amount:',
          uuid: uuidv4()
        },
        pubKey: {
          type: 'string',
          placeholder: 'your publickKey',
          value: txParams.pubKey,
          lable: 'pubKey:',
          uuid: uuidv4()
        },
        gasPrice: {
          type: 'string',
          placeholder: 'tx gasPrice',
          value: txParams.gasPrice,
          lable: 'gasPrice:',
          uuid: uuidv4()
        },
        gasLimit: {
          type: 'string',
          placeholder: 'tx gasLimit',
          value: txParams.gasLimit,
          lable: 'gasLimit:',
          uuid: uuidv4()
        },
      },
      code: {
        value: txParams.code
      },
      data: {
        value: JSON.parse(txParams.data)
      },
      buttonText: {
        value: 'send'
      },
      treeViewOptions: {
        maxDepth: 4,
        rootObjectKey: "data",
        modifiable: false,
        link: false
      }
    }
  },
  methods: {
    send() {
      let params = {
        data: this.data.value,
        code: this.code.value
      }

      Object.keys(this.forms).forEach(
        key => params[key] = this.forms[key].value
      )
      this.$emit('call', params)
    }
  }
}
</script>

<style>
.tree-view-item-key {
  color: rgb(119, 0, 255);
}
.tree-view-item-value-string {
  color: rgb(0, 255, 0);
}
</style>