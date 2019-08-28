//init stuff here

export default function ({app, store}) {
  return store.dispatch('mqtt/init');
}
