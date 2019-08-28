import Vue from 'vue'
import MqttWorker from 'workerize-loader!../webworker/mqtt'

const mqttWorker = new MqttWorker

const $webworker = {
  mqttWorker
}

Vue.prototype.$webworker = $webworker

export default function ({app, store}, inject) {
  app.$webworker = $webworker
  store.$webworker = $webworker
}
