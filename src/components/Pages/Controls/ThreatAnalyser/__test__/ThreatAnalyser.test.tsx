// import MockStompBroker from 'mock-stomp-broker'
// import React from 'react'
// import {render, screen} from '@testing-library/react'
// import {makeServer} from '../../../../../config/mirage-config'
// import ThreatAnalyser from '../ThreatAnalyser'

// describe('Alert Box behavior works as expected', () => {
//   let server: any

//   beforeEach(() => {
//     server = makeServer()
//   })

//   afterEach(() => {
//     server.shutdown()
//   })

//   it('displays the threats correctly', async () => {
//     const broker = new MockStompBroker()
//     const [sessionId] = await broker.newSessionsConnected()
//     await broker.subscribed(sessionId)
//     const messageId = broker.scheduleMessage(
//       `/topic/threat`,
//       'id for the threat',
//     )
//     await broker.messageSent(messageId)

//     expect(wrapper.text()).toContain(rowData.name);

//     // const wrapper = mount(
//     //   <ThreatAnalyser/>
//     // )

//     render(<ThreatAnalyser />)
//     // expect(screen.getAllByTestId('alertBox-td')).toHaveTextContent('Alerts 1')
//   })
// })
