/// <reference types="cypress" />
import { Then } from 'cypress-cucumber-preprocessor/steps'
import { LoginPage } from '../pages/loginPage'
import { ProfilePage } from '../pages/profilePage'

const loginPage = new LoginPage()
const profilePage = new ProfilePage()

Then('As a user, I login to book store', () => {
  loginPage.visit()
  loginPage.verifyPageTitle()
  loginPage.loginBookStore()
  profilePage.verifyPageTitle()
})
