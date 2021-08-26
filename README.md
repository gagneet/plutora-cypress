# plutora-cypress
Test suite for Plutora Cypress Interview

# To run the code

npm install faker

npx cypress open

- In the Cypress app, open folder integration

### To run Browser UI tests
- Run the npx command above 
- Open web-ui folder and click on 'purchase_phone.spec.js'
- This opens a Chrome browser window and runs the test scenarios

### To run the API tests
- Run the npx command above
- Change the 'baseURL' in cypress.json to "https://petstore.swagger.io/v2" 
- Open the newuser-api folder and click on
- 'post_record.spec.js' & then on
- 'get_record.spec.js'
- This opens a Chrome browser window and runs the test scenarios

# To use Cypress with React based SPA
- https://softchris.github.io/pages/cypress.html#adding-cypress-to-your-spa-app
