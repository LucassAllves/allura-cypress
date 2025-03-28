describe('Home page', () => {
    it("Deve visitar a página de /home do Adopet", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/home")

    })
    
    it("Deve visitar a página de /home do AdoPet e clicar no botão “Falar com o responsável”.", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/login")
        cy.get('[data-test="input-loginEmail"]').type("ana@email.com")
        cy.get('[data-test="input-loginPassword"]').type("Senha123")
        cy.get('[data-test="submit-button"]').click()
        cy.get('.card__contact').eq(1).click()
    })
})