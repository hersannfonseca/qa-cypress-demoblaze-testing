/// <reference types="cypress" />


describe('User feature', () => {
  it("GET One user with valid ID", () => {
    cy.request("GET", "https://api.escuelajs.co/api/v1/users/1").should((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("UPDATE Specific user with valid ID", () => {
    cy.request('PUT', 'https://api.escuelajs.co/api/v1/users/103', { name: 'Jane' }).then(
      (response) => {
        // response.body is automatically serialized into JSON
        expect(response.body).to.have.property('name', 'Jane') // true
        expect(response.status).to.eq(200);
      }
    )
  });
});
