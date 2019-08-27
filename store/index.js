import Vuex from "vuex"
import i18n from './i18n'
import mqtt from './mqtt'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      mqtt, i18n
    },
  })
}

export default createStore;
