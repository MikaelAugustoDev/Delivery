it("Testando o Login e Cadastro", () => {
    cy.visit("/login")
    cy.contains("Quero me Cadastrar").click();
    cy.url().should("include", "/cadastro");
    cy.get('input[name="nome"]').type('Mikael');
    cy.get('input[name="email"]').type('mikaelaugustodev@gmail.com');
    cy.get('input[name="password"]').type('mikael123');
    cy.contains("Cadastrar").click();
    cy.url().should("include", "/login");
})

it("Testando o Erro e o alert na page Cadastro", () => {
    cy.visit("/cadastro")
    cy.get('input[name="nome"]').type('Mikael');
    cy.get('input[name="email"]').type('mikaelaugustodev@gmail.com');
    cy.contains("Cadastrar").click();
    cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal("Por favor, preencha todos os campos");
        cy.on("window:confirm", () => true);
    })
})