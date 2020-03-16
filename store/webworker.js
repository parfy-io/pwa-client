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
        return ctx.dispatch('recognition/addAndSaveRecognitionStatus', event.value, {root: true})
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
