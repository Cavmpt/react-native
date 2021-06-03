import {Stomp} from '@stomp/stompjs'

export default function socketConnect() {
  const successfulConnect = () => {
    console.log('CONNECTION SUCCESFUL')
  }

  const errorConnect = () => {
    console.log('CONNECTION ERROR')
  }

  const closeEvent = () => {}
  var client = Stomp.client(process.env.WEBSOCKET_BASE_URL as string)

  client.connect(
    '', // login
    '', // password
    successfulConnect,
    errorConnect,
    process.env.WEBSOCKET_BASE_URL as string,
  )

  client.subscribe('/topic/threats', function (message) {
    let quote = JSON.parse(message.body)
    alert(quote.symbol + ' is at ' + quote.value)
  })
  client.subscribe('/topic/alerts', function (message) {
    let quote = JSON.parse(message.body)
    alert(quote.symbol + ' is at ' + quote.value)
  })

  // client.send('/topic/stocks', {}, JSON.stringify(quote))

  client.disconnect(function () {
    alert('See you next time!')
  })
}
