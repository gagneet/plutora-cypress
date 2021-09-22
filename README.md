# Book Store application Front End tests with Cypress & BDD (Cucumber)
- These tests are designed to cover front end user journeys and can monitor network requests to cover end to end flow (The third scenario in the specs is example of stubbing network responses)

- All the configurations for facilitating BDD (using Cucumber) are in `cypress/plugins/index.js`

- TypeScript step definition files are in under `cypress/integration` (with suffix `steps.ts`)

**Steps to execute tests:**

**Steps:**

Step 1: Open the project in any js code editor (for example, visual studio code)

Step 2: From the root directory, execute `npm install` in terminal

Step 3: Execute `npm run <script>` to execute tests. I have considered `dev` as test environment. So, please execute the relevant commands. In this case, you can just execute `npm run test:dev:debug` or `npm run test:dev:run` (to execute in headless mode)

| Script            | Description                                                         | 
| ----------------- | --------------------------------------------------------------------|
|test:{env}:run     | Executes tests in headless browser in selected environment           |
|test:{env}:debug   | Open cypress runner test in headed browser in selected environment  |

Step4: Execute `npm run report` to generate test report after execution

>Note: Reports are stored under `root/test/report` directory
