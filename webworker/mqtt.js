import mqtt from 'mqtt'
import dataUriToBuffer from 'data-uri-to-buffer'

let client = null
let currentClientId = null

const fireEvent = function (data) {
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
        try {
          tempClient.end(true)
        } catch (e) {
        }
        resolve()
      })
      tempClient.on('reconnect', () => {
        try {
          tempClient.end(true)
        } catch (e) {
        }
        reject('timeout')
      })
    } catch (e) {
      reject(e)
    }
  })
}

export function connnect(broker, clientId, username, password) {
  currentClientId = clientId

  if (client) {
    //shutdown the old client
    client.end()
  }

  client = mqtt.connect(broker, {
    username: username,
    password: password
  })

  client.on('connect', () => {
    fireEvent({
      type: 'connect',
      value: true
    })

    const statusTopic = process.env.mqtt.topic.status.replace("__CLIENT_ID__", clientId);
    client.subscribe(statusTopic, (err) => {
      if(err) {
        fireEvent({
          type: 'error',
          value: err
        })
      }
    })
  })

  client.on('disconnect', () => fireEvent({
      type: 'connect',
      value: false
    })
  )
  client.on('offline', () => fireEvent({
      type: 'connect',
      value: false
    })
  )

  client.on('message', function (topic, message) {
    const splitTopic = topic.split('/')
    const correlationId = splitTopic[splitTopic.length - 1]

    fireEvent({
      type: 'status',
      value: {
        correlationId: correlationId,
        message: JSON.parse(message.toString())
      }
    })
  })

  client.on('error', (error) => fireEvent({
      type: 'error',
      value: error
    })
  )
}

export function sendImage(image, correlationId) {
  const topic = process.env.mqtt.topic.out
    .replace('__CLIENT_ID__', currentClientId)
    .replace('__CORRELATION_ID__', correlationId)

  client.publish(topic, dataUriToBuffer(image))
}
