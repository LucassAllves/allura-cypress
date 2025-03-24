/// <reference types="cypress" />

describe("Teste Front End", () => {
    it("Acessando a pagina", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.contains("a", "Cadastrar").click()
        cy.get('[data-test="input-name"]').type("Teste 1234")
        cy.get('[data-test="input-email"]').type("la@gmail.com")
        cy.get('[data-test="input-password"]').type('HlucasAlves1')
        cy.get('[data-test="input-confirm-password"]').type('HlucasAlves1')
        cy.get('[data-test="submit-button"]')
    })
})