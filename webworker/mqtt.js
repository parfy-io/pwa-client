import mqtt from 'mqtt'

let client = null

const fireEvent = function(data){
  self.postMessage({
    type: 'mqtt-webworker', //only this types will be received by our custom event handler (see plugins/webworker)
    data: data,
  })
}

export function tryConnection(broker, clientId, username, password) {
  return new Promise((resolve, reject) => {
    try {
      let tempClient = mqtt.connect(broker, {
        username: username,
        password: password,
      })

      tempClient.on('connect', () => {
        try{
          tempClient.end(true)
        }catch (e) {}
        resolve()
      })
      tempClient.on('reconnect', () => {
        try{
          tempClient.end(true)
        }catch (e) {}
        reject('timeout')
      })
    } catch (e) {
      reject(e)
    }
  })
}

export function connnect(broker, clientId, username, password) {
  if (client) {
    //shutdown the old client
    client.end()
  }

  client = mqtt.connect(broker, {
    username: username,
    password: password
  })

  client.on('connect', function () {
    fireEvent({
      type: 'connect',
      value: true
    })
  })
  client.on('disconnect', function () {
    fireEvent({
      type: 'connect',
      value: false
    })
  })

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
  })

  client.on('error', function (error) {
    console.log(error)
  })
}

export function mqttPing() {
  console.log("Hello from WebWorker")
}
