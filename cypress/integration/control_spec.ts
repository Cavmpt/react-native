import {makeServer} from '../../src/config/mirage-config'

describe('control page works as expected', () => {
  let server: any

  beforeEach(() => {
    server = makeServer({environment: 'test'})
  })

  afterEach(() => {
    server.shutdown()
  })

  it('Visits the map page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('src').should('exist')
  })

  it('Visits the controls page and renders', () => {
    cy.visit('http://localhost:3000/controls')
    cy.get('control-page').should('exist')
  })

  it('Visits the controls page', () => {
    cy.visit('http://localhost:3000/controls')
    cy.get('control-page').should('exist')
  })
})

export {}
