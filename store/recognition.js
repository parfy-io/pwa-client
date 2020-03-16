import Vue from 'vue'

export const state = () => ({
  recognitions: [],
})

export const mutations = {
  loadRecognition(state, recognition) {
    state.recognitions.push(recognition)
  },
  addRecognitionStatus(state, {correlationId, message}) {
    let recognition = state.recognitions.filter(r => r.correlationId === correlationId)
    if (recognition && recognition.length > 0) {
      recognition = recognition[0]
      recognition.status.push(message)
    }
  },
  removeRecognition(state, correlationId) {
    let index = state.recognitions.findIndex(r => r.correlationId === correlationId)
    state.recognitions.splice(index, 1)
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

  initRecognition(ctx, {correlationId, image}) {
    ctx.commit('loadRecognition', {
      correlationId: correlationId,
      image: image,
      status: []
    })

    return this.$localStore.addRecognition(correlationId, image)
  },

  addAndSaveRecognitionStatus(ctx, {correlationId, message}) {
    ctx.commit('addRecognitionStatus', {correlationId, message})

    return this.$localStore.addRecognitionStatus(correlationId, message)
  },

  removeAndSaveRecognition(ctx, correlationId) {
    ctx.commit('removeRecognition', correlationId)

    return this.$localStore.removeRecognition(correlationId)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
