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

  $webworker.mqttWorker.onmessage = (event) => {
    if(event && event.data && event.data.type && event.data.type === 'mqtt-webworker') {
      store.dispatch('webworker/addEvent', event.data.data)
    }
  };
}
