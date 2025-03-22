/// <reference types="cypress" />

describe("Teste Front End", () => {
    it("Acessando a pagina", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/");
    })
})