describe("Testando a pagina Home", () => {
    it("Redirecionando para a rota Cardapio", () => {
        cy.visit("/");
        cy.contains("Cardápio").click();
        cy.url().should("include", "/cardapio");
    })

    it("Redirecionando para a rota Contato", () => {
        cy.visit("/");
        cy.contains("Contato").click();
        cy.url().should("include", "/contato");
    })
})

describe("Testando Rotas relacionadas a Cadastro e Login", () => {
    it("Redirecionando para Rota Login", () => {
        cy.visit("/");
        cy.contains("Fazer Login").click();
        cy.url().should("include", "/login");
    })

    it("Existe um botao de Entrar no meu Login?", () => {
        cy.visit("/login");
        cy.contains("Entrar")
    })

    it("Redirecionando para Rota Esqueci minha senha", () => {
        cy.visit("/login");
        cy.contains("Clique aqui").click();
        cy.url().should("include", "/esqueceuasenha");
    })

    it("Redirecionando para Rota Cadastro", () => {
        cy.visit("/login");
        cy.contains("Quero me Cadastrar").click();
        cy.url().should("include", "/cadastro");
    })

    it("Existe um botao de Entrar no meu Login?", () => {
        cy.visit("/cadastro");
        cy.contains("Cadastrar")
    })

    it("A seta de voltar redireciona de volta para a rota anterior?", () => {
        cy.visit("/");
        cy.contains("Fazer Login").click();
        cy.url().should("include", "/login");
        cy.contains("Quero me Cadastrar").click();
        cy.url().should("include", "/cadastro");
        cy.get(".sc-fGZLLs > img").click();
        cy.url().should("include", "/login");
        cy.contains("Clique aqui").click();
        cy.url().should("include", "/esqueceuasenha");
        cy.get("img").click();
        cy.url().should("include", "/login");
        cy.get(".sc-aklqw > img").click();
        cy.url().should("include", "/");
    })
}) 