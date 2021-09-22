/// <reference types="cypress" />
import testData from '../../fixtures/testData.json'
import stubbedResponse from '../../fixtures/stubbedResponse.json'
import { NavigationMenu } from './navigationMenu'

const navigationMenu = new NavigationMenu()

export class BookStorePage {
  title: string = testData.bookStorePage.title

  verifyPageTitle() {
    cy.get('div.main-header').should('have.text', this.title)
  }

  selectBook(bookTitle: string = testData.bookStorePage.bookTitle) {
    cy.get('div.rt-td:nth-child(2) div span a').as('bookTitleColumn')
    cy.get('@bookTitleColumn').each(($el, index) => {
      const title = $el.text()
      cy.log('title', title)
      if (title.includes(bookTitle)) {
        cy.get('@bookTitleColumn').eq(index).click()
      }
    })
  }

  ValidateBookCount(bookCount:string){
      cy.get('.rt-tr-group').each(($list) => {
        expect(bookCount).to.equal($list.length.toString())
      })
  }

  validateBookDetails(bookTitle: string) {
    cy.get('#title-wrapper #userName-value').should('have.text', bookTitle)

    /*
    More book attributes can be validated using this function.
    */
  }

  addBookToYourCollection() {
    cy.get('button#addNewRecordButton')
      .contains('Add To Your Collection')
      .click()
  }

  clickBookStoreAndIntercept() {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://demoqa.com/BookStore/v1/Books',
      },
      { statusCode: 200, body: stubbedResponse.getBooksEndpoint },
    ).as('getBooks')
    navigationMenu.clickMenuOption('Book Store')
    cy.wait('@getBooks')
    this.verifyPageTitle()
  }

  getTotalPages(totalPages: string){
    cy.get('.-totalPages').should('have.text',totalPages)
  }

  clickNextButton(){
    cy.get('.-next > .-btn').click();
  }
}
