/// <reference types="cypress" />

describe('example twitter-clone', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays a tweet that was submitted', () => {
    cy.get('[test-id="input-tweet"]').type('THIS IS OUR TWEET');
    cy.get('[test-id="submit-tweet"]').click();
    cy.get('[test-id="feed"]').first().should('contain.text', 'THIS IS OUR TWEET').should('contain.text', 'Me')
  })

  it('follows user when click', () => {
    cy.get('[test-id="follow"]').children('div').first().find('p').invoke('text').then(followText => {
      cy.get('[test-id="follow"]').children('div').first().find('button').click();
      cy.get('[test-id="following"]').children('div').first().find('p').invoke('text').should(followingText => {
        expect(followingText).to.eq(followText);
      });
    });
  })

  it('unfollows user when click', () => {
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
