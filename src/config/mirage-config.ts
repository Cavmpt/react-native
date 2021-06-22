// @ts-nocheck
import {createServer, Model} from 'miragejs'
import {imageOne} from './base64Store/imageStore'

export function makeServer({environment = 'test'} = {}) {
  let server = createServer({
    environment,

    models: {
      // movies: Model.extend({
      //   author: belongsTo(),
      // }),
      threats: Model,
      alerts: Model,
    },

    seeds(server) {
      server.db.loadData({
        threats: [
          {id: 1, message: 'Treat 1', value: imageOne, acknowledged: false},
          {id: 2, message: 'Treat 2', value: imageOne, acknowledged: false},
          {id: 3, message: 'Treat 3', value: imageOne, acknowledged: false},
          {id: 4, message: 'Treat 4', value: imageOne, acknowledged: false},
        ],
        alerts: [
          {id: 1, message: 'Alerts 1', value: imageOne, acknowledged: false},
          {id: 1, message: 'Alerts 1', value: imageOne, acknowledged: false},
          {id: 1, message: 'Alerts 1', value: imageOne, acknowledged: false},
          {id: 1, message: 'Alerts 1', value: imageOne, acknowledged: false},
        ],
      })
    },

    routes() {
      this.get(process.env.REACT_APP_REST_BASE_URL + '/threats', schema => {
        return schema.threats.all()
      })

      this.get(process.env.REACT_APP_REST_BASE_URL + '/alerts', schema => {
        return schema.alerts.all()
      })
    },
  })
  return server
}

export default function setupMirageServerIfDevelopment() {
  if (process.env.NODE_ENV === 'development') {
    makeServer()
  }
}
