/* eslint-disable */
// @ts-nocheck
import {Client} from '@stomp/stompjs'
import React, {useContext, useEffect} from 'react'
import {Context, ContextType} from '../store/Provider'
import {
  createReadableStream,
  createArrayBuffer,
} from '../helpers/deserializeMethods'

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
      .then(body => createReadableStream(body))
      .then(stream => createArrayBuffer(stream))
      .then(result => {
        // GET THE LIST FROM THE PROTOCOL BUFFER
        const UInt8ImageArray =
          new message.UnknownObjectEntityRepository.deserializeBinary(
            result,
          ).getEntityList()
        setCurrentThreats(() => [...setThreats()])
        function setThreats() {
          let threatsArray = []
          for (let i = 0; i < UInt8ImageArray.length; i++) {
            console.log(threatsArray)
            const currentUInt8Id = UInt8ImageArray[i].getId()
            const currentUInt8Image = UInt8ImageArray[i]
              .getUnknownobject()
              .getImage()
            const iteratedObjectOfAlerts = {
              id: currentUInt8Id,
              message: `threat ${currentUInt8Id}`,
              value: currentUInt8Image,
            }
            threatsArray.push(iteratedObjectOfAlerts)
          }
          return threatsArray
        }
      })
      .then(() => {
        fetch(process.env.REACT_APP_WEBSOCKET_BASE_URL + '/alerts', {
          method: 'GET',
          responseType: 'arraybuffer',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
        })
          .then(response => response.body)
          .then(body => createReadableStream(body))
          .then(stream => createArrayBuffer(stream))
          .then(result => {
            // GET THE LIST FROM THE PROTOCOL BUFFER
            const UInt8ImageArray =
              new message.UnknownObjectEntityRepository.deserializeBinary(
                result,
              ).getEntityList()
            setCurrentAlerts(() => [...setAlerts()])
            function setAlerts() {
              let alertsArray = []
              for (let i = 0; i < UInt8ImageArray.length; i++) {
                const currentUInt8Id = UInt8ImageArray[i].getId()
                const currentUInt8Image = UInt8ImageArray[i]
                  .getUnknownobject()
                  .getImage()
                const iteratedObjectOfAlerts = {
                  id: currentUInt8Id,
                  message: `alert ${currentUInt8Id}`,
                  value: currentUInt8Image,
                }
                alertsArray.push(iteratedObjectOfAlerts)
              }
              return alertsArray
            }
          })
      })
      .then(() => {
        const stompConfig = {
          connectHeaders: {
            login: '',
            password: '',
          },
          brokerURL:
            process.env.REACT_APP_WEBSOCKET_BASE_URL_2 + '/uav-monitor',
          reconnectDelay: 20000,
        }
        let stompClient = new Client(stompConfig)

        stompClient.onConnect = (frame: any) => {
          stompClient.subscribe('/topic/alert', function (response) {
            const body = response._binaryBody
            if (body) {
              let deserializeBinary =
                new message.UnknownObjectNotification.deserializeBinary(body)
              let action = deserializeBinary.getAction()
              let id = deserializeBinary.getId()
              if (action === message.UnknownObjectNotification.Action.REMOVED) {
                setCurrentAlerts(currentAlerts => {
                  currentAlerts.shift()
                  return [...currentAlerts]
                })
              } else if (
                action === message.UnknownObjectNotification.Action.ADDED
              ) {
                fetch(
                  process.env.REACT_APP_WEBSOCKET_BASE_URL + '/alerts/' + id,
                  {
                    method: 'GET',
                    responseType: 'arraybuffer',
                    mode: 'cors',
                    cache: 'no-cache',
                    // credentials: 'same-origin',
                  },
                )
                  .then(response => response.body)
                  .then(body => createReadableStream(body))
                  .then(stream => createArrayBuffer(stream))
                  .then(result => {
                    // GET THE LIST FROM THE PROTOCOL BUFFER
                    const unknownObjectEntity =
                      new message.UnknownObjectEntity.deserializeBinary(result)
                    let id = unknownObjectEntity.getId()
                    let image = unknownObjectEntity
                      .getUnknownobject()
                      .getImage()

                    const alert = {
                      id: id,
                      message: `alert ${id}`,
                      value: image,
                    }

                    setCurrentAlerts(currentAlerts => {
                      return [...currentAlerts, alert]
                    })
                  })
              }
            } else {
              console.log('got empty message')
            }
          })
          stompClient.subscribe('/topic/threat', function (response) {
            const body = response._binaryBody
            if (body) {
              let deserializeBinary =
                new message.UnknownObjectNotification.deserializeBinary(body)
              let action = deserializeBinary.getAction()
              let id = deserializeBinary.getId()
              if (action === message.UnknownObjectNotification.Action.REMOVED) {
                setCurrentThreats(currentThreat => {
                  let splicedcurrentThreat = currentThreat.splice(0, 1)
                  return [...splicedcurrentThreat]
                })
              } else if (
                action === message.UnknownObjectNotification.Action.ADDED
              ) {
                fetch(
                  process.env.REACT_APP_WEBSOCKET_BASE_URL + '/threats/' + id,
                  {
                    method: 'GET',
                    responseType: 'arraybuffer',
                    mode: 'cors',
                    cache: 'no-cache',
                    // credentials: 'same-origin',
                  },
                )
                  .then(response => response.body)
                  .then(body => {
                    console.log('body___:', body)
                    return createReadableStream(body)
                  })
                  .then(stream => createArrayBuffer(stream))
                  .then(result => {
                    const unknownObjectEntity =
                      new message.UnknownObjectEntity.deserializeBinary(result)
                    let id = unknownObjectEntity.getId()
                    let image = unknownObjectEntity
                      .getUnknownobject()
                      .getImage()

                    const threat = {
                      id: id,
                      message: `threat ${id}`,
                      value: image,
                    }

                    setCurrentThreats(lastCurrentThreat => [
                      ...lastCurrentThreat,
                      threat,
                    ])
                  })
              }
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
