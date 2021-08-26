// This spec file contains the tests, for the API part of the test interview.
// The aim of the tests is to add a new record and get the same back.

// The test uses a FAKE API, which is a mock of the real API. 
// It stimulates the real API with a fake request, and checks the response.

// This file creates a new record, and then checks the response
/// <reference types="cypress" />

let fakeUser;

describe('Given the Users API', () => {
  beforeEach(() => {
    cy.task('newUser').then((user) => {
      fakeUser = user;
      cy.log(JSON.stringify(fakeUser))
    });
  });

  context('When I send POST as a /newuser', () => {
    it('Then it should create a new user', () => {
      cy.request({
        method: 'POST',
        url: '/newuser-api',
        body: fakeUser
      })
        .should((response) => {
          expect(response.status).eq(201)
          expect(response.body.message).eq("The new user creation was successful")
        });
    });
  });
});
