/* eslint-disable */
// @ts-nocheck
import {Client} from '@stomp/stompjs'
import React, {useContext, useEffect} from 'react'
import {Context, ContextType} from '../store/Provider'

const message = require('../helpers/uav-monitor_pb')
export interface ISocketConfigProps {
  children: React.ReactNode
}

export default function socketConfig(props: ISocketConfigProps) {
  const context = useContext<ContextType>(Context)
  const {setCurrentAlerts, currentAlerts, setCurrentThreats, currentThreats} =
    context

  useEffect(() => {
    fetch(process.env.REACT_APP_WEBSOCKET_BASE_URL + '/threats', {
      method: 'GET',
      responseType: 'arraybuffer',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    })
      .then(response => response.body)
      .then(body => {
        const reader = body.getReader()
        return new ReadableStream({
          start(controller) {
            function push() {
              reader.read().then(({done, value}) => {
                if (done) {
                  controller.close()
                  return
                }
                controller.enqueue(value)
                push()
              })
            }

            push()
          },
        })
      })
      .then(stream => {
        // Respond with the fetched stream stream
        return new Response(stream, {
          headers: {'Content-Type': 'binary/html'},
        }).arrayBuffer()
      })
      .then(result => {
        // GET THE LIST FROM THE PROTOCOL BUFFER
        const UInt8ImageArray =
          new message.UnknownObjectEntityRepository.deserializeBinary(
            result,
          ).getEntityList()
        for (let i = 0; i < UInt8ImageArray.length; i++) {
          // PUSHING IT INTO THE GLOBAL STORE ONE BY ONE

          const currentUInt8Image = UInt8ImageArray[i]
            .getUnknownobject()
            .getImage()
          console.log('---currentAlerts---', currentUInt8Image)

          const iteratedObjectOfAlerts = {
            id: i + 1,
            message: `ALERT ${i + 1}`,
            value: currentUInt8Image,
          }
          setCurrentAlerts(() => [...currentAlerts, iteratedObjectOfAlerts])
        }
      })
      .then(() => {
        const stompConfig = {
          connectHeaders: {
            login: '',
            password: '',
          },
          brokerURL: 'ws://xguardlabs-uav-monitor.herokuapp.com/uav-monitor',
          // brokerURL: 'ws://localhost:8080/uav-monitor',
          reconnectDelay: 20000,
        }
        let stompClient = new Client(stompConfig)

        stompClient.onConnect = (frame: any) => {
          stompClient.subscribe('/topic/alert', function (response) {
            const body = response._binaryBody
            if (body) {
              console.log(
                'REMOVED',
                new message.UnknownObjectNotification.deserializeBinary(body)
                  .array[0],
              )
              const threatIndexToBeRemoved =
                new message.UnknownObjectNotification.deserializeBinary(body)
                  .array[0]
              const selectedThreatToBecomeAnAlert = currentThreats.splice(
                threatIndexToBeRemoved,
                1,
              )
              setCurrentThreats(() => [...currentThreats])
              setCurrentAlerts(() => [
                ...currentAlerts,
                ...selectedThreatToBecomeAnAlert,
              ])
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
      })
  }, [])
  const {children} = props

  return <div>{children}</div>
}
