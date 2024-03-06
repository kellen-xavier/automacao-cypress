describe("Tarefa", () => {
  it('deve cadastrar', () => {
    cy.visit('https://bugbank.netlify.app/');
    cy.log('Tentando encontrar o elemento:', '.kOeYBn > .input__default');
    cy.get('.ihdmxA').click();

    cy.get(':nth-child(2) > .input__default').click({force: true}).type('kellenxaviier@gmail.com').should('exist')
    cy.get(':nth-child(3) > .input__default').click({force: true}).type('kellen').should('exist')
    
  });

  
});
