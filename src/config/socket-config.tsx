/* eslint-disable */
// @ts-nocheck
import {Client} from '@stomp/stompjs'
import React, {useContext} from 'react'
import {Context, ContextType} from '../store/Provider'

const message = require('../helpers/uav-monitor_pb')

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
  const context = useContext<ContextType>(Context)
  const {setCurrentAlerts} = context

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
    stompClient.subscribe('/topic/alert', function (response) {
      const body = response._binaryBody
      if (body) {
        console.log(
          'REMOVED',
          new message.UnknownObjectNotification.deserializeBinary(body)
            .array[0],
        )
        const removedItemIndex =
          new message.UnknownObjectNotification.deserializeBinary(body).array[0]
        const currentArrayWithdeselectedElement = array.splice(
          removedItemIndex,
          1,
        )
        setCurrentAlerts(...currentArrayWithdeselectedElement)
      } else {
        console.log('got empty message')
      }
    })
    stompClient.subscribe('/topic/threat', function (message) {
      // const body = message._binaryBody
      // to be deserialised tomorrow
      if (message.body) {
        console.log('message-body:', message.body)
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
