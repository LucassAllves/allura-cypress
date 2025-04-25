# 📦 Projeto Allura - Testes Automatizados com Cypress

Este repositório contém testes automatizados criados com o framework **Cypress** para validar funcionalidades do projeto **AdoPet** — uma plataforma que conecta ONGs com pessoas interessadas na adoção de animais.

---

## 🐶 O Projeto AdoPet

AdoPet é uma aplicação que permite que ONGs cadastrem animais para adoção e que adotantes possam encontrá-los facilmente.

- 🔗 [Frontend AdoPet](https://adopet-frontend-cypress.vercel.app/)
- 🔗 [Backend AdoPet](https://adopet-api-i8qu.onrender.com/adotante/)

---

## 🧪 Sobre o Projeto de Testes

Este projeto utiliza **Cypress** para automação de testes End-to-End, visando garantir a estabilidade e a qualidade da aplicação AdoPet.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Cypress `v13.6.4`
- Mochawesome (para geração de relatórios)
- Cypress Cloud

---

## ⚙️ Configuração do Projeto

### Passos iniciais

```bash
git clone https://github.com/seu-usuario/allura_cypress.git
cd allura_cypress
npm install
```

### Executando os testes

- Abrir o Cypress (modo interativo):

```bash
npx cypress open
```

- Executar todos os testes no modo headless:

```bash
npx cypress run
```

- Executar um teste específico:

```bash
npx cypress run --spec cypress/e2e/login-correto.cy.js
```

---

## 📈 Geração de Relatórios com Mochawesome

Para ativar e configurar os relatórios automáticos:

### Instalação

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

### Configuração no `cypress.config.js`

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ufagba",
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/separate-reports',
    overwrite: false,
    html: false,
    json: true,
    inline: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

---

## ☁️ Cypress Cloud

O projeto está integrado ao **Cypress Cloud** para visualização e compartilhamento de resultados de execução de testes.

### Comando para execução com envio para o Cloud:

```bash
npx cypress run --record --key 663c19bc-b2c3-4df5-b73e-f8b993f0d48b
```

---

## 📊 Scripts Automatizados

Scripts adicionados no `package.json` para facilitar a geração e visualização de relatórios:

```json
"scripts": {
  "clean-reports": "rm -rf cypress/reports/separate-reports/*.json && rm -f cypress/reports/combined/*.html",
  "premerge": "mkdir -p cypress/reports/combined",
  "merge-reports": "mochawesome-merge cypress/reports/separate-reports/*.json > cypress/reports/combined/full-report.json",
  "generate-report": "marge cypress/reports/combined/full-report.json -o cypress/reports/combined --inline --charts",
  "cypress-cloud": "cypress run --record --key 663c19bc-b2c3-4df5-b73e-f8b993f0d48b",
  "full-report": "npm run merge-reports && npm run generate-report",
  "test": "npm run clean-reports && npm run premerge && npm run cypress-cloud && npm run full-report"
}
```

### Rodar os testes e gerar relatório completo:

```bash
npm run test
```

---

## 📚 Aprenda mais sobre o Cypress

Quer saber mais sobre o framework? Acesse a [documentação oficial do Cypress](https://www.cypress.io/) para tutoriais e dicas.

---

## 👨‍💻 Autor

Desenvolvido por **Lucas**, QA e entusiasta de automação de testes.  
Entre em contato via [LinkedIn](https://www.linkedin.com/in/lucas-alves-la) ou [GitHub](https://github.com/LucassAllves).

---