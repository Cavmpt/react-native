import React, {useContext} from 'react'

import './ThreatsBox.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatsBoxProps {
  placeholder?: any
}

export default function ThreatsBox(props: IThreatsBoxProps): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {currentThreats} = context

  return (
    <div className='threatBox'>
      <tr className='threatBox__header'>
        <th>Confirmed threats to be investigated </th>
      </tr>
      {currentThreats.length > 1 ? (
        currentThreats.map(threats => (
          <tr className='threatBox__row'>
            <td>{threats.name}</td>
          </tr>
        ))
      ) : (
        <tr className='threatBox__row'>
          <td>no threats detected</td>
        </tr>
      )}
    </div>
  )
}

// const reader = rb.getReader();

//   return new ReadableStream({
//     start(controller) {
//       // The following function handles each data chunk
//       function push() {
//         // "done" is a Boolean and value a "Uint8Array"
//         reader.read().then( ({done, value}) => {
//           // If there is no more data to read
//           if (done) {
//             console.log('done', done);
//             controller.close();
//             return;
//           }
//           // Get the data and send it to the browser via the controller
//           controller.enqueue(value);
//           // Check chunks by logging to the console
//           console.log(done, value);
//           push();
//         })
//       }

//       push();
//     }
//   });
// })
// .then(stream => {
//   // Respond with our stream
//   return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
// })
// .then(result => {
//   // Do things with result
//   console.log(result);
// });
