// This spec file contains the tests, for the API part of the test interview.
// The aim of the tests is to update a record.

// Initial test uses a user created earlier to login
/// <reference types="cypress" />

context('When I open and send GET to Pet Store - Swagger', () => {
    beforeEach(() => {
      cy.visit('https://petstore.swagger.io/v2')
    })

    it('.add() - create a custom command', () => {
      Cypress.Commands.add('console', {
        prevSubject: true,
      }, (subject, method) => {
        // the previous subject is automatically received
        // and the commands arguments are shifted

        // allow us to change the console method used
        method = method || 'log'

        // log the subject to the console
        // @ts-ignore TS7017
        console[method]('The subject is', subject)

        // whatever we return becomes the new subject
        // we don't want to change the subject so
        // we return whatever was passed in
        return subject
      })

      // @ts-ignore TS2339
      cy.get('button').console('info').then(($button) => {
        // subject is still $button
      })
    })
  })