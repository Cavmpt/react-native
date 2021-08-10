import React from 'react'
import { View, Text } from 'react-native'
import AlertsTable from '../UIcomponents/AlertsTable'
import ThreatsTable from '../UIcomponents/ThreatsTable'
import LiveStream from '../UIcomponents/LiveStream'

export default function Alerts(): JSX.Element {
  return (
    <View>
      <LiveStream/>
      <ThreatsTable/>
      <AlertsTable/>
    </View>
  )
}
