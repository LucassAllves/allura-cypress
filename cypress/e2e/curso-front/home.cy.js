describe('Home page', () => {
    it("Deve visitar a página de /home do Adopet", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/home")

    })

    it("Deve visitar a página de /home do AdoPet e clicar no botão “Falar com o responsável”.", () => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/login")
        cy.login('ana@email.com', 'Senha123')
        cy.get('.card__contact').eq(1).click()
    })
})