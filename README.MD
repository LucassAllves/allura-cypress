
# allura_cypress
Projeto em Cypress para teste automatizado.

# O projeto AdoPet
ONGs que possui animais para adoção:
- Para acessar o Front-End, acesse: [https://adopet-frontend-cypress.vercel.app](https://adopet-frontend-cypress.vercel.app/)
- Para acessar o Back-End, acesse: [https://adopet-api-i8qu.onrender.com/adotante/](https://adopet-api-i8qu.onrender.com/adotante/)

## Configuração do projeto:
- `Noje js` 
- `Vscode`
- `git init` 
- `npm init` 
- ```npm install cypress@13.6.4 --save-dev```
- ```npm install```
- ```npx cypress open```
- ```npx cypress run```(executar em modo headless)
- ```npx cypress run --spec .\cypress\e2e\login-correto.cy.js```(executar arquivo desejado)

Criando os teste com cypress
- Iniciar um novo projeto usando o NodeJS, através do comando npm init, criando o arquivo package.json para dar início aos testes com Cypress;
- Configurar um projeto de testes Cypress via interface gráfica da ferramenta, o Launchpad;
- Criar um novo arquivo de teste, com extensão .spec.js dentro do diretório e2e e utilizar o comando describe para descrever a suíte de testes;
- Usar a função it e o comando cy.visit(), para indicar a URL que será carregada antes de cada novo caso de teste;
- Criar um novo caso de teste utilizando a função it e utilizar os recursos cy.get(), bem como os métodos .type(), .click() e .contains() para realizar as assertions;
- Usar as ferramentas de DevTools para melhor identificar os elementos HTML da página.


Automatizando cenários:
- Usar o Selector Playground do Cypress para identificar o nome do elemento;
- Criar novos testes com base em cenários de caminho triste e feliz;
- Utilizar com mais detalhes o DevTools do navegador para explorar e identificar os elementos com que o Cypress irá interagir;
- Utilizar o comando cy.contains() para procurar por um texto dentro de um seletor, facilitando a busca por um elemento;
- Criar novos casos de teste, incluindo a função it().