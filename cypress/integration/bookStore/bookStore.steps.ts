/// <reference types="cypress" />
import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoginPage } from '../pages/loginPage'
import { ProfilePage } from '../pages/profilePage'
import { BookStorePage } from '../pages/bookStorePage'
import { NavigationMenu } from '../pages/navigationMenu'

const loginPage = new LoginPage()
const profilePage = new ProfilePage()
const bookStorePage = new BookStorePage()
const navigationMenu = new NavigationMenu()

Given('As a user, I visit the login page', () => {
  loginPage.visit()
  loginPage.verifyPageTitle()
})

And('I enter my login details and login successfully', () => {
  loginPage.loginBookStore()
  profilePage.verifyPageTitle()
})

And('I click book store link in the left menu', () => {
  profilePage.clickBookStoreMenuItem()
})

And(/^I add the book \"([^\"]*)\" to my collection$/, (bookTitle: string) => {
  bookStorePage.selectBook(bookTitle)
  bookStorePage.validateBookDetails(bookTitle)
  bookStorePage.addBookToYourCollection()
})

And('I add the book to my collection', () => {
  bookStorePage.addBookToYourCollection()
})

And('I click Profile link in left menu', () => {
  navigationMenu.clickMenuOption('Profile')
  profilePage.verifyPageTitle()
})

And('I am able to delete all the books from the collection', () => {
  profilePage.deleteAllBooksFromCollection()
})

Then(
  /^I validate that \"([^\"]*)\" book is added to my book collection$/,
  (numOfBooks: string) => {
    profilePage.validateBookCount(numOfBooks)
  },
)

Given('I intercept the GET Books call to stub the response', () => {
  bookStorePage.clickBookStoreAndIntercept()
})

Then(/^Then pagination displays \"([^\"]*)\" pages$/, (numOfPages: string) => {
  bookStorePage.getTotalPages(numOfPages)
})

And('I click next button and navigate to second page', () => {
  bookStorePage.clickNextButton()
})

And(
  /^I validate that the book count on second page is \"([^\"]*)\"$/,
  (bookCount: string) => {
    bookStorePage.ValidateBookCount(bookCount)
  },
)
