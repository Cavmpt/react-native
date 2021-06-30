// @ts-nocheck
import {createServer, Model} from 'miragejs'

import {unknownEntityRepoSeedBinary} from './../helpers/protobufSeed/protobufSeed'

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
        threats: unknownEntityRepoSeedBinary(),
        alerts: unknownEntityRepoSeedBinary(),
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
  console.log('unknownEntityRepoSeedBinary:', unknownEntityRepoSeedBinary())
  return server
}

export function setupMirageServerIfDevelopment() {
  if (process.env.NODE_ENV === 'development') {
    makeServer()
  }
}

export function setupMirageServerIfTest() {
  if (window.Cypress) {
    // If your app makes requests to domains other than / (the current domain), add them
    // here so that they are also proxied from your app to the handleFromCypress function.
    // For example: let otherDomains = ["https://my-backend.herokuapp.com/"]
    let otherDomains = []
    let methods = ['get', 'put', 'patch', 'post', 'delete']

    createServer({
      environment: 'test',
      routes() {
        for (const domain of ['/', ...otherDomains]) {
          for (const method of methods) {
            this[method](`${domain}*`, async (schema, request) => {
              let [status, headers, body] = await window.handleFromCypress(
                request,
              )
              return new Response(status, headers, body)
            })
          }
        }

        // If your central server has any calls to passthrough(), you'll need to duplicate them here
        // this.passthrough('https://analytics.google.com')
      },
    })
  }
}
