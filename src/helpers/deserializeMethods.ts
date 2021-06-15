function createReadableStream(body: ReadableStream<Uint8Array>): any {
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
}

function createArrayBuffer(stream: any) {
  return new Response(stream, {
    headers: {'Content-Type': 'binary/html'},
  }).arrayBuffer()
}

export {createReadableStream, createArrayBuffer}
