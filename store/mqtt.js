export const state = () => ({
  broker: '',
  clientId: '',
  username: '',
  password: ''
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
  }
}

export const getters = {
  hasValidConfiguration(state) {
    return state.broker !== "" &&
      state.clientId !== ""
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
