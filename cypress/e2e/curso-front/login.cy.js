/// referce
describe('Pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click()
    })

    it("Deve preencher os campos do login com sucesso", () => {
        cy.login('ana@email.com', 'Senha123')
    })

    it("Falha no login do sistema", () => {
        cy.login('ana.@email.com', 'senha123')
        cy.contains("Por favor, verifique o email digitado").should("be.visible")
        cy.contains("A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres").should("be.visible")
    })
})