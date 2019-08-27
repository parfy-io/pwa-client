export default function ({ isHMR, app, store, route, params, error, redirect }) {
  //check if configuration is saved in store
  if(!store.getters['mqtt/hasValidConfiguration'] && route.path !== '/') {
    redirect('/')
  }
}
