// var url = 'ws://localhost:8080/uav-monitor'
// var client = Stomp.client(url)
// var connect_callback = function () {
//   // called back after the client is connected and authenticated to the STOMP server
// }
// var error_callback = function (error) {
//   // display the error's message header:
//   alert(error.headers.message)
// }
// var headers = {
//   login: 'mylogin',
//   passcode: 'mypasscode',
//   // additional header
//   'client-id': 'my-client-id',
// }
// client.connect(headers, connectCallback, errorCallback)

// client.connect(
//   login,
//   passcode,
//   connectCallback,
//   errorCallback,
//   closeEventCallback,
//   host,
// )
// var subscription = client.subscribe(destination, callback, { id: mysubid });
// var quote = {symbol: 'APPL', value: 195.46};
// client.send("/app/threat-ack", {}, JSON.stringify(quote));

// client.subcribe("/topic/alerts", function(message) {
//   var quote = JSON.parse(message.body);
//   alert(quote.symbol + " is at " + quote.value);
// });

// client.subcribe("/topic/threats", function(message) {
//   var quote = JSON.parse(message.body);
//   alert(quote.symbol + " is at " + quote.value);
// });

// client.disconnect(function () {
//   alert('See you next time!')
// })
