//this is not a vuex-store! but a file for our localforage store
import localforage from 'localforage'
import AsyncLock from 'async-lock'

const recognitionStatusLock = new AsyncLock()

export function newLocalStore() {
  const store = {
    settings: localforage.createInstance({
      driver: localforage.INDEXEDDB,
      version: 1.0,
      storeName: 'settings', // Should be alphanumeric, with underscores.
    }),
    recognitionImages: localforage.createInstance({
      driver: localforage.INDEXEDDB,
      version: 1.0,
      storeName: 'recognition_images', // Should be alphanumeric, with underscores.
    }),
    recognitionStatus: localforage.createInstance({
      driver: localforage.INDEXEDDB,
      version: 1.0,
      storeName: 'recognition_status', // Should be alphanumeric, with underscores.
    }),
  }

  return {
    ready() {
      return Promise.all([
        store.settings.ready(),
        store.recognitionImages.ready(),
        store.recognitionStatus.ready()
      ])
    },
    getMqttSettings(){
      return store.settings.getItem("mqtt")
    },
    setMqttSettings(settings){
      return store.settings.setItem("mqtt", settings)
    },
    getLanguage(){
      return store.settings.getItem('language')
    },
    setLanguage(lang){
      return store.settings.setItem('language', lang)
    },
    addRecognition(id, image){
      return store.recognitionImages.setItem(id, image)
    },
    removeRecognition(id){
      return Promise.all([
        store.recognitionImages.removeItem(id),
        store.recognitionStatus.removeItem(id)
      ])
    },
    addRecognitionStatus(id, message) {
      //here we need this lock mechanism!
      return recognitionStatusLock.acquire('addRecognitionStatus', () => {
        return store.recognitionStatus.getItem(id)
          .then(status => {
            let newStatus = []
            if(status) newStatus = status.slice()

            newStatus.push(message)
            return store.recognitionStatus.setItem(id, newStatus)
          })
      })
    },
    getRecognition(id) {
      return Promise.all([
        store.recognitionImages.getItem(id),
        store.recognitionStatus.getItem(id),
      ]).then(result => {
        let image = result[0]
        let status = result[1]

        return {
          image: image,
          status: status
        }
      })
    },
    getRecognitions(){
      return store.recognitionImages.keys()
        .then(keys => keys.map(key => {
          return this.getRecognition(key)
            .then(recognition => {
              return {
                id: key,
                ...recognition
              }
            })
        }))
        .then(promises => Promise.all(promises))
    }
  }
}
