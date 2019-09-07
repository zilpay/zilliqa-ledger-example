<template>
  <div id="app" class="container mb-5">
    <h1 class="text-warning text-center pt-5">Testing U2F API</h1>

    <div class="row">
      <div class="col-lg-auto">
        <GetInfo
          @call="getAddressForm"
          :form="getAddress.form"
          :btnText="getAddress.btnText"
        />
        <GetInfo
          @call="getPublicKeyForm"
          :form="getAddress.form"
          :btnText="getPublicKey.btnText"
        />
        <Button @click.native="getVersion">{{version}}</Button>
      </div>
      <div class="col-lg-12">
        <h2 class="mt-5">Sign Transaction</h2>
        <Tx @call="sendTxForm" />
      </div>
    </div>

    <b-modal :ref="modal"
             hide-footer
             title="">
      <tree-view
        class="p-2"
        :data="result"
        :options="treeViewOptions"
      />
    </b-modal>
  </div>
</template>

<script>
import GetInfo from './views/GetInfo'
import Tx from './views/Tx'
import Button from './components/Button'
import LedgerMixin from './mixins/ledger'
import StaticTx from './static/tx.json'

export default {
  name: 'app',
  mixins: [LedgerMixin],
  components: {
    GetInfo,
    Button,
    Tx
  },
  data() {
    return {
      getAddress: {
        btnText: 'get address',
        form: {
          type: 'number',
          placeholder: 'choice the index for ledger HDKEY',
          value: 0,
          lable: 'index:'
        }
      },
      getPublicKey: {
        btnText: 'get publicKey',
      },
      version: 'get version',
      modal: 'result-modal',
      treeViewOptions: {
        maxDepth: 4,
        modifiable: false,
        link: false,
        rootObjectKey: "result",
      },
      result: null
    }
  },
  methods: {
    async sendTxForm(data) {
      const { index } = data
      let txParams = {}

      Object.keys(StaticTx).forEach(
        key => txParams[key] = data[key]
      )

      this.result = await this.LedgerMixinSignTx(index, txParams)
      this.$refs[this.modal].show()
    },
    async getAddressForm(index) {
      this.result = await this.LedgerMixinGetAddress(index)
      this.$refs[this.modal].show()
    },
    async getPublicKeyForm(index) {
      this.result = await this.LedgerMixinGetPublicKey(index)
      this.$refs[this.modal].show()
    },
    async getVersion() {
      this.result = await this.LedgerMixinGetVersion()
      this.$refs[this.modal].show()
    }
  },
  mounted() {
    // this.$refs[this.modal].show()
  }
}
</script>

<style>
</style>
