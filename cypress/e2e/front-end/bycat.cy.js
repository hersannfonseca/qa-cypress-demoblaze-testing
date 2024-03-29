/// <reference types="cypress" />

describe('Filter by category feature', () => {

    beforeEach(() => {
        cy.visit('/')
      })

    it('FE | Filter by phones', () => {
        cy.contains('Phones').click();
        cy.get('#tbodyid').should('be.visible');
        cy.screenshot();
    })
    it('FE | Filter by laptops', () => {
        cy.contains('Laptops').click();
        cy.get('#tbodyid').should('be.visible');
        cy.screenshot();
    })
    it('FE | Filter by monitors', () => {
        cy.contains('Monitors').click();
        cy.get('#tbodyid').should('be.visible');
        cy.screenshot();
    })
});