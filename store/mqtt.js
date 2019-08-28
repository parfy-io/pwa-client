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
      state.clientId !== "" &&
      state.username !== "" &&
      state.password !== "";
  }
}

const actions = {
  init(ctx) {
    return this.$localStore.getMqttSettings()
      .then(settings => {
        if(settings){
          return ctx.commit('saveConfiguration', settings)
        }
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
