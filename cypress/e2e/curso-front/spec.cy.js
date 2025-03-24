/// <reference types="cypress" />

describe("Teste Front End", () => {
    it("Acessando a pagina", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
    })

    it("Criando cadastrado", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.contains("a", "Cadastrar").click()
        cy.get('[data-test="input-name"]').type("Teste 1234")
        cy.get('[data-test="input-email"]').type("la@gmail.com")
        cy.get('[data-test="input-password"]').type('HlucasAlves1')
        cy.get('[data-test="input-confirm-password"]').type('HlucasAlves1')
        cy.get('[data-test="submit-button"]').click()
    })

    it("Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.contains("a", "Ver pets disponíveis para adoção").click()
    })

    it("Visite a página de principal do AdoPet e teste os botões header", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.get('.header__home').click()
        cy.get('.header__message').click()

    })

    it("Visite a página de /login do Adopet", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/login")

    })

    it("Visite a página de /home do Adopet", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/home")

    })

    it("Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/login")
        cy.get('[data-test="input-loginEmail"]').type("la@gmail.com")
        cy.get('[data-test="input-loginPassword"]').type("HlucasAlves1")
        cy.get('[data-test="submit-button"]').click()
        cy.get('.card__contact').eq(1).click()
    })
})