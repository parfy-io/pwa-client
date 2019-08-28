import mqtt from 'mqtt'

let client = null

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
    console.log('mqtt connection established')
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
