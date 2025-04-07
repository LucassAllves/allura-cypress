/// <reference types="cypress" />

describe("Teste funcionais de cadastro", () => {
    beforeEach(() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
    })

    it("Deve acessar a pagina home", () => {
        cy.get('.initial').should("be.visible")
    })

    it("Deve preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
        cy.contains("a", "Cadastrar").click()
        cy.get('[data-test="input-name"]').type("Teste 1234")
        cy.get('[data-test="input-email"]').type("la@gmail.com")
        cy.get('[data-test="input-password"]').type('HlucasAlves1')
        cy.get('[data-test="input-confirm-password"]').type('HlucasAlves1')
        cy.get('[data-test="submit-button"]').click()
    })

    it("Deve visitar a página de principal do AdoPet e clicar no botão ‘Ver pets disponíveis para adoção”", () => {
        cy.contains("a", "Ver pets disponíveis para adoção").click()
    })

    it("Deve visitar a página de principal do AdoPet e teste os botões header", () => {
        cy.get('.header__home').click()
        cy.get('.header__message').click()

    })

    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.get('[data-test="register-button"]').click()
        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible')
    })
})