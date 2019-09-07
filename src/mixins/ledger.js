import LedgerZilliqa from '../lib/interface'
import TransportWebAuthn from '@ledgerhq/hw-transport-webauthn'
import TransportU2F from '@ledgerhq/hw-transport-u2f'

export default {
  data() {
    return { }
  },
  methods: {
    transportU2F() {
      return TransportWebAuthn.create()
    },
    async LedgerMixinSignTx(index, txParams) {
      const transport = await this.transportU2F()
      const ledger = new LedgerZilliqa(transport)

      try {
        return await ledger.signTxn(index, txParams)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
        return { error: err }
      }
    },
    async LedgerMixinGetVersion() {
      const transport = await this.transportU2F()
      const ledger = new LedgerZilliqa(transport)

      return ledger.getVersion()
    },
    async LedgerMixinGetAddress(index) {
      const transport = await this.transportU2F()
      const ledger = new LedgerZilliqa(transport)

      return ledger.getPublicAddress(index)
    },
    async LedgerMixinGetPublicKey(index) {
      const transport = await this.transportU2F()
      const ledger = new LedgerZilliqa(transport)

      return ledger.getPublicKey(index)
    }
  }
}