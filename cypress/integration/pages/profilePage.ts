/// <reference types="cypress" />
import testData from '../../fixtures/testData.json'

export class ProfilePage {
  title: string = testData.profilePage.title
  loggedInUsername: string = testData.profilePage.loggedInUsername

  visit() {
    cy.visit(Cypress.env('baseUrl'))
  }

  verifyPageTitle() {
    cy.get('div.main-header').should('have.text', this.title)
    cy.get('#userName-value').should('have.text', this.loggedInUsername)
  }

  logoutBookStore() {
    cy.get('#submit').click()
  }

  clickBookStoreMenuItem() {
    cy.get('.btn.btn-light#item-2').eq(4).click()
  }

  validateBookCount(expectedBookCount: string) {
    cy.get('div.rt-td:nth-child(5) div span').each(($list) => {
      expect(expectedBookCount).to.equal($list.length.toString())
    })
  }

  deleteAllBooksFromCollection() {
    cy.get('.mt-2.buttonWrap.row button')
      .contains('Delete All Books')
      .click()
      .get('.modal-body')
      .should('have.text', testData.alertTexts.deleteAllBooks)
      .get('button#closeSmallModal-ok')
      .click()
  }

  deleteOneBookFromCollection() {
    cy.get('div.rt-td:nth-child(5) div span').each(($el, index) => {
      cy.wrap($el)
        .eq(index)
        .click()
        .get('.modal-body')
        .should('have.text', testData.alertTexts.deleteBook)
        .get('button#closeSmallModal-ok')
        .click()
    })
  }
}
