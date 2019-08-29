import Vuex from "vuex"
import i18n from './i18n'
import mqtt from './mqtt'
import webworker from './webworker'
import recognition from './recognition'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      mqtt, i18n, webworker, recognition
    },
  })
}

export default createStore;
