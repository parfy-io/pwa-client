import Vue from 'vue'

export const state = () => ({
  recognitions: [],
})

export const mutations = {
  initRecognition(state, {correlationId, image}) {
    state.recognitions.push({
      correlationId: correlationId,
      image: image,
      status: []
    })
  },
  addRecognitionStatus(state, {correlationId, message}) {
    let recognition = state.recognitions.filter(r => r.correlationId === correlationId)
    if(recognition && recognition.length > 0) {
      recognition = recognition[0]
      recognition.status.push(message)
    }
  }
}

export const getters = {
}

const actions = {
  init(ctx) {
    //initialisation stuff here
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
