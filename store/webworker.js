export const state = () => ({
  events: [],
})

export const mutations = {
  addEvent(state, event) {
    state.events.push(event)
  }
}

export const getters = {
}

const actions = {
  init(ctx) {
    //initialisation stuff here
  },
  addEvent(ctx, event) {
    ctx.commit('addEvent', event)

    switch(event.type){
      case 'connect':
        ctx.commit('mqtt/setConnectionState', event.value, {root: true})
        break
      case 'status':
        ctx.commit('recognition/addRecognitionStatus', event.value, {root: true})
        break
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
