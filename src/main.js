import Vue from 'vue'
import App from './App.vue'

import TreeView from 'vue-json-tree-view'
import { VBModal, ModalPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(ModalPlugin)
Vue.use(TreeView)
Vue.directive('b-modal', VBModal)

new Vue({
  render: h => h(App),
}).$mount('#app')
