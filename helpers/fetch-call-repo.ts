import { createReadableStream } from "./deserialize/deserialize-methods"
import { createArrayBuffer } from "./deserialize/ deserialize-methods"

export const fetchAlerts = () => {
  return fetch(process.env.REACT_APP_REST_BASE_URL + '/alerts', {
    method: 'GET',
    responseType: 'arraybuffer',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then(response => response.body)
    .then(body => createReadableStream(body))
    .then(stream => createArrayBuffer(stream))
}

export const fetchThreats = () => {
  return fetch(process.env.REACT_APP_REST_BASE_URL + '/threats', {
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
}