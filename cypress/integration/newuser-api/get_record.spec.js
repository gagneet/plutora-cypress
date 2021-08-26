// This spec file contains the tests, for the API part of the test interview.
// The aim of the tests is to add a new record and get the same back.

// The test uses a FAKE API, which is a mock of the real API. 
// It stimulates the real API with a fake request, and checks the response.

// This file checks the record, and then gets the user created earlier
/// <reference types="cypress" />

describe('Given the Users API', () => {  
    context('When I send GET /user/{username} passing username query param', () => {
      it('Then it should return the user {username} provided in the request', () => {
        cy.request({
          method: 'GET',
          url: '/user/{_username}',
          qs: {
            _username: 'newuser123'
          }
        })
          .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.newusers[0].username).to.eq("User ABC created")
          });
      });
    });

    context('When I send GET /user/{_username}', () => {
      it('Then it should return the user with the given username', () => {
        cy.request({
          method: 'GET',
          url: '/user/{_username}'
        })
          .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.quantity).to.eq(response.body.newusers.length)
            Cypress._.each(response.body.newusers, (newuser) => {
              expect(newuser.email).to.not.be.null
              expect(newuser).to.have.all.keys('id', '_username', 'firstName', 'lastName', 'email', 'password', 'phone', 'userStatus')
            })
          });
      });
    });    
  });