/// <reference types="cypress" />

describe("Teste funcionais de cadastro", () => {
    it("Deve acessar a pagina home", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
    })

    it("Deve preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.contains("a", "Cadastrar").click()
        cy.get('[data-test="input-name"]').type("Teste 1234")
        cy.get('[data-test="input-email"]').type("la@gmail.com")
        cy.get('[data-test="input-password"]').type('HlucasAlves1')
        cy.get('[data-test="input-confirm-password"]').type('HlucasAlves1')
        cy.get('[data-test="submit-button"]').click()
    })

    it("Deve visitar a página de principal do AdoPet e clicar no botão ‘Ver pets disponíveis para adoção”", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.contains("a", "Ver pets disponíveis para adoção").click()
    })

    it("Deve visitar a página de principal do AdoPet e teste os botões header", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.get('.header__home').click()
        cy.get('.header__message').click()

    })

    it("Deve visitar a página de /login do Adopet", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/login")

    })

    it("Deve visitar a página de /home do Adopet", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/home")

    })

    it("Deve visitar a página de /home do AdoPet e clicar no botão “Falar com o responsável”.", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/login")
        cy.get('[data-test="input-loginEmail"]').type("la@gmail.com")
        cy.get('[data-test="input-loginPassword"]').type("HlucasAlves1")
        cy.get('[data-test="submit-button"]').click()
        cy.get('.card__contact').eq(1).click()
    })
})