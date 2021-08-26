// This spec file contains the tests, for the API part of the test interview.
// The aim of the tests is to update a record.

// Initial test uses a user created earlier to login
describe('Open the Blaze CRM store site', () => {
    it('successfully loads', () => {
      cy.visit('/') // the URL is being taken from the cypress conf file
    })
})