import Vue from 'vue'

export const state = () => ({
  recognitions: [],
})

export const mutations = {
  loadRecognition(state, recognition) {
    state.recognitions.push(recognition)
  },
  initRecognition(state, {correlationId, image}) {
    state.recognitions.push({
      correlationId: correlationId,
      image: image,
      status: []
    })

    this.$localStore.addRecognition(correlationId, image)
  },
  addRecognitionStatus(state, {correlationId, message}) {
    let recognition = state.recognitions.filter(r => r.correlationId === correlationId)
    if(recognition && recognition.length > 0) {
      recognition = recognition[0]
      recognition.status.push(message)
    }

    this.$localStore.addRecognitionStatus(correlationId, message)
  },
  removeRecognition(state, correlationId) {
    let index = state.recognitions.findIndex(r => r.correlationId === correlationId)
    state.recognitions.splice(index, 1)

    this.$localStore.removeRecognition(correlationId)
  }
}

export const getters = {

}

const actions = {
  init(ctx) {
    //initialisation stuff here
    this.$localStore.getRecognitions()
      .then(recognitions => {
        for(let recognition of recognitions) {
          ctx.commit('loadRecognition', {
            correlationId: recognition.id,
            image: recognition.image,
            status: recognition.status ? recognition.status : []
          })
        }
      })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
