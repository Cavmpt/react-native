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
    fetch(process.env.REACT_APP_WEBSOCKET_BASE_URL + '/alerts', {
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

          const currentUInt8Id = UInt8ImageArray[i]
            .getId()

          const currentUInt8Image = UInt8ImageArray[i]
            .getUnknownobject()
            .getImage()

          const iteratedObjectOfAlerts = {
            id: currentUInt8Id,
            message: `alert ${currentUInt8Id}`,
            value: currentUInt8Image,
          }
          setCurrentAlerts(() => [...currentAlerts, iteratedObjectOfAlerts])
          console.log('currentAlerts:', currentAlerts)
        }
      })
      .then(() => {
        const stompConfig = {
          connectHeaders: {
            login: '',
            password: '',
          },
          brokerURL: process.env.REACT_APP_WEBSOCKET_BASE_URL_2 + '/uav-monitor',
          // brokerURL: 'ws://localhost:8080/uav-monitor',
          reconnectDelay: 20000,
        }
        let stompClient = new Client(stompConfig)

        stompClient.onConnect = (frame: any) => {
          stompClient.subscribe('/topic/alert', function (response) {
            const body = response._binaryBody
            if (body) {
              let deserializeBinary = new message.UnknownObjectNotification.deserializeBinary(body);
              let action = deserializeBinary.getAction();
              let id = deserializeBinary.getId();
              console.log(
                action,
                id,
              )
              if (action === message.UnknownObjectNotification.Action.REMOVED) {
                currentAlerts.splice(
                  id,
                  1,
                )
                console.log('____CURRENT_ALERTS____:', currentAlerts)
                setCurrentAlerts(() => [...currentAlerts])
              } else if (action === message.UnknownObjectNotification.Action.ADDED) {

                fetch(process.env.REACT_APP_WEBSOCKET_BASE_URL + '/alerts/' + id, {
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
                    const unknownObjectEntity =
                      new message.UnknownObjectEntity.deserializeBinary(
                        result,
                      )

                    let id = unknownObjectEntity.getId();
                    let image = unknownObjectEntity.getImage();

                    const Alert = {
                      id: id,
                      message: `alert ${id}`,
                      value: image,
                    }

                    setCurrentAlerts(() => [...currentAlerts, Alert])
                  })

              }
            } else {
              console.log('got empty message')
            }
          })
          stompClient.subscribe('/topic/threat', function (response) {
            const body = response._binaryBody
            if (body) {
              let deserializeBinary = new message.UnknownObjectNotification.deserializeBinary(body);
              let action = deserializeBinary.getAction();
              let id = deserializeBinary.getId();
              console.log(
                action,
                id,
              )
              if (action === message.UnknownObjectNotification.Action.REMOVED) {
                currentThreats.splice(
                  id,
                  1,
                )
                console.log('____CURRENT_THREATS____:', currentThreats)
                setCurrentThreats(() => [...currentThreats])
              } else if (action === message.UnknownObjectNotification.Action.ADDED) {

                fetch(process.env.REACT_APP_WEBSOCKET_BASE_URL + '/threats/' + id, {
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
                    const unknownObjectEntity =
                      new message.UnknownObjectEntity.deserializeBinary(
                        result,
                      )

                    let id = unknownObjectEntity.getId();
                    let image = unknownObjectEntity.getUnknownobject().getImage();

                    const Threat = {
                      id: id,
                      message: `threat ${id}`,
                      value: image,
                    }

                    setCurrentThreats(() => [...currentThreats, Threat])
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
