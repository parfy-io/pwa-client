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

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
