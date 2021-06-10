/* eslint-disable */
// @ts-nocheck
import {Client} from '@stomp/stompjs'

export default async function socketConnect() {
  const stompConfig = {
    connectHeaders: {
      login: '',
      password: '',
    },
    brokerURL: 'ws://xguardlabs-uav-monitor.herokuapp.com/uav-monitor',
    // brokerURL: 'ws://localhost:8080/uav-monitor',
    reconnectDelay: 2000,
  }

  let stompClient = new Client(stompConfig)

  function DFS(body) {
    const reader = body.getReader()
    return new ReadableStream({
      start(controller) {
        function push() {
          reader.read().then(({done, value}) => {
            if (done) {
              console.log('done', done)
              controller.close()
              return
            }
            controller.enqueue(value)
            console.log(done, value)
            push()
          })
        }

        push()
      },
    })
  }

  stompClient.onConnect = (frame: any) => {
    stompClient.subscribe('/topic/alert', function (message) {
      const body = message.body
      if (body) {
        DFS(body)
          .then(stream => {
            // Respond with the fetched stream stream
            return new Response(stream, {
              headers: {'Content-Type': 'binary/html'},
            }).arrayBuffer()
          })
          .then(result => {
            console.log('result:', result)
          })
      } else {
        console.log('got empty message')
      }
    })
    stompClient.subscribe('/topic/threat', function (message) {
      // to be deserialised tomorrow
      if (message.body) {
        DFS(message.body)
          .then(stream => {
            // Respond with the fetched stream stream
            return new Response(stream, {
              headers: {'Content-Type': 'binary/html'},
            }).arrayBuffer()
          })
          .then(result => {
            console.log('result:', result)
          })
      } else {
        console.log('got empty message')
      }
    })
  }

  stompClient.onStompError = function (frame: any) {
    console.log('Broker reported error: ' + frame.headers['message'])
    console.log('Additional details: ' + frame.body)
  }

  stompClient.activate()

  stompClient.debug = (str: any) => {
    console.log('STOMeP: ' + str)
  }
}

//client.deactivate();
