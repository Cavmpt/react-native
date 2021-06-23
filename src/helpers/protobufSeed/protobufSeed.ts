/* eslint-disable */
// @ts-nocheck
import message from '../uav-monitor_pb'
import core from '../uav-core_pb'
const google_protobuf_timestamp_pb = require('../../../node_modules/google-protobuf/google/protobuf/timestamp_pb')

export default function unknownEntityRepoSeedBinary(): void {
  const unknownObject = new core.UnknownObject()
  const unknownEntity = new message.UnknownObjectEntity()
  const unknownEntityRepo = new message.UnknownObjectEntityRepository()
  const unknownObjectNotification = new message.UnknownObjectNotification()

  const date = new google_protobuf_timestamp_pb.Timestamp()

  unknownObject.setImage('RANDOM BASE 64')
  unknownObject.setTimestamp(date)
  unknownObject.setWaypoint(new core.Waypoint())

  unknownEntity.setId('1')
  unknownEntity.setUnknownobject(unknownObject)

  unknownEntityRepo.addEntity(unknownEntity).serializeBinary()

  return unknownEntityRepo
}
