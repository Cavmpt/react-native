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
  const {
    setCurrentAlerts,
    currentAlerts,
    setCurrentThreats,
    currentThreats,
    currentAnalyzedThreatOrAlert,
    setCurrentAnalyzedThreatOrAlert,
  } = context

  useEffect(() => {
    console.log('----HIT:')
    fetch(process.env.REACT_APP_REST_BASE_URL + '/threats', {
      method: 'GET',
      responseType: 'arraybuffer',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    })
      .then(response => {
        return response.body
      })
      .then(body => {
        return createReadableStream(body)
      })
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
        fetch(process.env.REACT_APP_REST_BASE_URL + '/alerts', {
          method: 'GET',
          responseType: 'arraybuffer',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
        })
          .then(response => response.body)
          .then(body => createReadableStream(body))
          .then(stream => createArrayBuffer(stream))
          .then(async result => {
            // GET THE LIST FROM THE PROTOCOL BUFFER
            const UInt8ImageArray =
              new message.UnknownObjectEntityRepository.deserializeBinary(
                result,
              ).getEntityList()
            await setCurrentAlerts(() => {
              return [...setAlerts()]
            })

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
            // ugly code bear with me
            const firstAlert = () => {
              if ([...setAlerts()].length > 0) {
                return [...setAlerts()][0]
              } else return {}
            }
            await setCurrentAnalyzedThreatOrAlert(() => firstAlert())
            await console.log('firstAlert:', firstAlert())
          })
      })
      .then(() => {
        const stompConfig = {
          connectHeaders: {
            login: '',
            password: '',
          },
          brokerURL: process.env.REACT_APP_WEBSOCKET_BASE_URL + '/uav-monitor',
          reconnectDelay: 20000,
        }
        let stompClient = new Client(stompConfig)

        stompClient.onConnect = (frame: any) => {
          stompClient.subscribe('/topic/alert', async function (response) {
            const body = response._binaryBody
            if (body) {
              let deserializeBinary =
                new message.UnknownObjectNotification.deserializeBinary(body)
              let action = deserializeBinary.getAction()
              let id = deserializeBinary.getId()
              if (action === message.UnknownObjectNotification.Action.REMOVED) {
                /*
                 * TESTING IN CREATING new Current Analyzed Threat
                 */
                // for (let i = 0; i < currentAlerts.length; i++) {
                //   if (currentAlerts[i].id === id) {
                //     await currentAlerts.splice(i, 1)
                //     await setCurrentAlerts(currentAlerts => {
                //       return [...currentAlerts]
                //     })
                //     if (
                //       currentAlerts.length > 0 &&
                //       currentAnalyzedThreatOrAlert !== undefined &&
                //       currentAnalyzedThreatOrAlert.type === 'alert' &&
                //       currentAnalyzedThreatOrAlert.id === id
                //     ) {
                //       setCurrentAnalyzedThreatOrAlert(currentAlerts => {
                //         return {
                //           id: currentAlerts.id,
                //           message: currentAlerts.message,
                //           value: currentAlerts.value,
                //           type: 'alert',
                //         }
                //       })
                //     } else if (currentAlerts.length < 0) {
                //       setCurrentAnalyzedThreatOrAlert()
                //     }
                //   }
                // }
              } else if (
                action === message.UnknownObjectNotification.Action.ADDED
              ) {
                fetch(process.env.REACT_APP_REST_BASE_URL + '/alerts/' + id, {
                  method: 'GET',
                  responseType: 'arraybuffer',
                  mode: 'cors',
                  cache: 'no-cache',
                  // credentials: 'same-origin',
                })
                  .then(response => response.body)
                  .then(body => createReadableStream(body))
                  .then(stream => createArrayBuffer(stream))
                  .then(async result => {
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
                    const setCurrentAnalyzedThreatOrAlert = () => {
                      if (currentAlerts.length > 0) {
                        const firstAlert = currentAlerts[0]
                        setCurrentAnalyzedThreatOrAlert(() => firstAlert)
                      }
                    }

                    await setCurrentAlerts(currentAlerts => {
                      return [...currentAlerts, alert]
                    })
                    await setCurrentAnalyzedThreatOrAlert()
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
              } else if (
                action === message.UnknownObjectNotification.Action.ADDED
              ) {
                fetch(process.env.REACT_APP_REST_BASE_URL + '/threats/' + id, {
                  method: 'GET',
                  responseType: 'arraybuffer',
                  mode: 'cors',
                  cache: 'no-cache',
                  // credentials: 'same-origin',
                })
                  .then(response => response.body)
                  .then(body => createReadableStream(body))
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
