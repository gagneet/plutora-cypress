/// <reference types="cypress" />
export class NavigationMenu {
    clickMenuOption(menuOption:string) {
        cy.get('.menu-list').eq(5).as('bookStoreMenu')
        cy.get('@bookStoreMenu').each(($el, index) => {
            const title = $el.text()
            cy.log('title', title)
            if (title.includes(menuOption)) {
              cy.get('@bookStoreMenu').eq(index).contains(menuOption).click()
            }
          })
      }
}