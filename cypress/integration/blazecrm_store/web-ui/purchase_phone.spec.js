// This spec file contains the tests, for adding a record and saving it.
// The aim of the tests is to purchase a phone after logging onto the store's website.

// Initial test uses a user created earlier to login
describe('Open the Blaze CRM store site', () => {
    it('successfully loads', () => {
      cy.visit('/') // the URL is being taken from the cypress conf file
    })
})

// Login to the BlazeCRM Store
describe('Login & purchase a phone', () => {
    it('successfully logs in, adds phone to cart and purchases it', () => {
        cy.get('#login2').contains('Log in').click()
        cy.get('#loginusername').type('pc')
        cy.get('#loginpassword').type('plutora')
        cy.wait(1000)        
        cy.get('button').contains('Log in').click()
        cy.wait(1000)
        cy.get('#nameofuser').contains('Welcome pc').should('exist')
    // Site logs out, if I use a different test, so commenting out those items, as the API login is not allowed
    //})
    //it('successfully loads the phone details page', () => {
        cy.get('.list-group-item').contains('Phones').should('have.attr', 'href', '#').click()
    //})
    //it('successfully adds the samsung galaxy s6 phone to cart', () => {
        cy.get('.hrefch').contains('Samsung galaxy s6').click()
        cy.get('.btn-success').contains('Add to cart').click()
    //})
    //it('successfully checks the cart and purchases the phone', () => {
        cy.get('#cartur').contains('Cart').click()
        cy.wait(1000)
    
        // If I do not purchase the phone, then I need to delete it from my cart
        // Not using this as the cart is empty after the last step
        //cy.get('.btn-danger').contains('Delete').click()
        
        // Place the order for teh items in the Cart
        cy.wait(1000)        
        cy.get('.btn-success').contains('Place Order').click()
        
        // The order is placed, so I need to enter the useer details
        cy.get('#name').type('Abc')
        cy.get('#country').type('Australia')
        cy.get('#city').type('Sydney')
        cy.get('#card').type('9999999999999999')
        cy.get('#month').type('11')
        cy.get('#year').type('2022')
        cy.get('.btn-primary').contains('Purchase').click()
        cy.get('h2').contains('Thank you for your purchase!').should('exist')
        cy.get('.btn-primary').contains('OK').click()
        // Issue with the website not closing the purchase popup
        //cy.contains('×').click()

        // Logout from the website
        //cy.get('#logout2').contains('Log out').click()
    })
})
