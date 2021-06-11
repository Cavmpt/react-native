// @ts-nocheck
import {createServer, Model} from 'miragejs'

export function makeServer({environment = 'test'} = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create('user', {name: 'Bob'})
      server.create('user', {name: 'Alice'})
    },

    routes() {
      this.get('/users', schema => {
        return schema.users.all()
      })
    },
  })

  return server
}
