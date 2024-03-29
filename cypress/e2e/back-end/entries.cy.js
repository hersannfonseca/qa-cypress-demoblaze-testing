/// <reference types="cypress" />

describe('Entries feature', () => {
    it("GET all entries", () => {
        cy.request("GET", "https://api.demoblaze.com/entries").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            cy.log(JSON.stringify(response.body));
        });
    });
});