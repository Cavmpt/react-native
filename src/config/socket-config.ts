import {Client} from '@stomp/stompjs'

export default async function socketConnect() {
  const stompConfig = {
    connectHeaders: {
      login: '',
      password: '',
    },
    brokerURL: 'ws://xguardlabs-uav-monitor.herokuapp.com',
    reconnectDelay: 2000,
  }

  let stompClient = new Client(stompConfig)

  stompClient.onConnect = (frame: any) => {
    stompClient.subscribe('/topic/threat', function () {
      console.log('hitCONNECT')
    })

    stompClient.subscribe('/topic/threat', function () {
      console.log('hitCONNECTThreat')
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
