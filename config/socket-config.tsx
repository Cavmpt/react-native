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

export default function socketConfig(props: ISocketConfigProps): JSX.Element {

  useEffect(() => {

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

              } else if (
                action === message.UnknownObjectNotification.Action.ADDED
              ) {

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
