/// <reference types="cypress" />

describe('Cart feature', () => {
    it('FE | Add new product to cart', () => {
      cy.visit('https://www.demoblaze.com')
      cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
      cy.get('.col-sm-12 > .btn').click();
      cy.get('#cartur').click();
      cy.get('.success > :nth-child(1) > img').should('be.visible')
      cy.screenshot()
    })
    it('BE | Delete product from the cart', () => {
        cy.visit('https://www.demoblaze.com')
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('.success > :nth-child(4) > a').click();
        cy.get('.success > :nth-child(1) > img').should('not.exist');
        cy.screenshot()
      })
  });