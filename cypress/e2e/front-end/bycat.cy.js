/// <reference types="cypress" />

describe('Filter by category feature', () => {
    it('FE | Filter by phones', () => {
        cy.visit('https://www.demoblaze.com');
        cy.contains('Phones').click();
        cy.get('#tbodyid').should('be.visible');
        cy.screenshot();
    })
    it('FE | Filter by laptops', () => {
        cy.visit('https://www.demoblaze.com');
        cy.contains('Laptops').click();
        cy.get('#tbodyid').should('be.visible');
        cy.screenshot();
    })
    it('FE | Filter by monitors', () => {
        cy.visit('https://www.demoblaze.com');
        cy.contains('Monitors').click();
        cy.get('#tbodyid').should('be.visible');
        cy.screenshot();
    })
});