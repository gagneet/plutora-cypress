// This spec file contains the tests, for the API part of the test interview.
// The aim of the tests is to add a new record and get the same back.

// The test uses a FAKE API, which is a mock of the real API. 
// It stimulates the real API with a fake request, and checks the response.

// This file checks the record, and then gets the user created earlier
/// <reference types="cypress" />

describe('Given the Users API', () => {
    context('When I send GET /newuser-api', () => {
      it('Then it should return a list with all registered users', () => {
        cy.request({
          method: 'GET',
          url: '/newuser-api'
        })
          .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.quantity).to.eq(response.body.newusers.length)
            Cypress._.each(response.body.newusers, (newuser) => {
              expect(newuser.email).to.not.be.null
              expect(newuser).to.have.all.keys('name', 'email', 'password', 'administrator', '_id')
            })
          });
      });
    });
  
    context('When I send GET /newuser passing id query param', () => {
      it('Then it should return only the filtered user', () => {
        cy.request({
          method: 'GET',
          url: '/newuser-api',
          qs: {
            _id: '1abcXY5nmpAsdGs1'
          }
        })
          .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.newusers[0].name).to.eq("User ABC created")
          });
      });
    });
  });