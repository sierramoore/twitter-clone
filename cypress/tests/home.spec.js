/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example twitter-clone', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000')
  })

  it('displays a tweet that was submitted', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('[test-id="input-tweet"]').type('THIS IS OUR TWEET');
    cy.get('[test-id="submit-tweet"]').click();


    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('[test-id="feed"]').first().should('contain.text', 'THIS IS OUR TWEET').should('contain.text', 'Me')
  })
  it('follows user when click', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('[test-id="follow"]').children('div').first().find('p').invoke('text').then(followText => {
      cy.get('[test-id="follow"]').children('div').first().find('button').click();
      cy.get('[test-id="following"]').children('div').first().find('p').invoke('text').should(followingText => {
        expect(followingText).to.eq(followText);
      });
    });
  })
  it('unfollows user when click', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('[test-id="follow"]').children('div').first().find('p').invoke('text').then(followText => {
      cy.get('[test-id="follow"]').children('div').first().find('button').click();
      cy.get('[test-id="following"]').children('div').first().find('p').invoke('text').then(_ => {
        cy.get('[test-id="following"]').children('div').first().find('button').click();
        cy.get('[test-id="follow"]').children('div').first().find('p').invoke('text').should(newFollowText => {
          expect(newFollowText).to.eq(followText);
        });
      });
    });
  })
})
