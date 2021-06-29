/* eslint-disable */
// @ts-nocheck
import message from '../uav-monitor_pb'
import core from '../uav-core_pb'
import Base64 from './exportBase64'
import {Readable} from 'stream'
const google_protobuf_timestamp_pb = require('../../../node_modules/google-protobuf/google/protobuf/timestamp_pb')

function bufferToStream(binary) {
  const readableInstanceStream = new Readable({
    read() {
      this.push(binary)
      this.push(null)
    },
  })

  return readableInstanceStream
}

function unknownEntityRepoSeedBinary(): void {
  const unknownObject = new core.UnknownObject()
  const unknownEntity = new message.UnknownObjectEntity()
  const unknownEntityRepo = new message.UnknownObjectEntityRepository()
  const unknownObjectNotification = new message.UnknownObjectNotification()

  const date = new google_protobuf_timestamp_pb.Timestamp()

  unknownObject.setImage(Base64())
  unknownObject.setTimestamp(date)
  unknownObject.setWaypoint(new core.Waypoint())

  console.log('unknownObject:', unknownObject.getTimestamp())

  unknownEntity.setId('1')
  unknownEntity.setUnknownobject(unknownObject)

  console.log('unknownEntity:', unknownEntity)

  const endBuffer = unknownEntityRepo.addEntity(unknownEntity).serializeBinary()

  return bufferToStream(endBuffer)
}

function unknownObject(): void {
  console.log(core)
  console.log(message)
}

export {unknownEntityRepoSeedBinary, unknownObject}
