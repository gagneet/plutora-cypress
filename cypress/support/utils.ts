export class Helper {
  getReportMetadata(hostName: string): void {
    cy.writeFile('cypress/fixtures/reportConfig.json',
    {
      browserName: Cypress.browser.displayName,
      browserVersion: Cypress.browser.version,
      deviceName: hostName,
      platformName: Cypress.platform,
      platformVersion: navigator.platform,
    })
  }
}

