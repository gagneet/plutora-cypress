/// <reference types="cypress" />
import testData from '../../fixtures/testData.json'

export class LoginPage {
  title: string = testData.loginPage.title

  visit() {
    cy.visit(Cypress.env('baseUrl'))
  }

  verifyPageTitle() {
    cy.get('div.main-header').should('have.text', this.title)
  }

  loginBookStore() {
    cy.get('input#userName')
      .type(Cypress.env('username'))
      .get('input#password')
      .type(Cypress.env('password'))
      .get('#login')
      .click()
  }
}