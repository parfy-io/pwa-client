export const state = () => ({
  broker: '',
  clientId: '',
  username: '',
  password: '',
  connected: false,
})

export const mutations = {
  saveConfiguration(state, {broker, clientId, username, password}) {
    state.broker = broker
    state.clientId = clientId
    state.username = username
    state.password = password

    this.$localStore.setMqttSettings({
      broker, clientId, username, password
    })
  },
  setConnectionState(state, connected) {
    state.connected = connected
  }
}

export const getters = {
  hasValidConfiguration(state) {
    return state.broker !== "" &&
      state.clientId !== ""
  },
  getConfiguration(state){
    return {
      broker: state.broker,
      clientId: state.clientId,
      username: state.username,
      password: state.password,
    }
  }
}

const actions = {
  init(ctx) {
    return this.$localStore.getMqttSettings()
      .then(settings => {
        if(settings){
          return ctx.dispatch('applyConfiguration', settings)
        }
      })
  },
  applyConfiguration(ctx, cfg) {
    return this.$webworker.mqttWorker.connnect(cfg.broker, cfg.clientId, cfg.username, cfg.password)
      .then(() => ctx.commit('saveConfiguration', cfg))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
