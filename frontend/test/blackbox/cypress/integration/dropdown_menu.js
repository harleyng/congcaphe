describe('Menu Page', () => {
    it('Check if header working correctly', () => {
      cy.visit('http://localhost:3000/menu')
      for (let i = 0; i < 4; i++) {
        cy.get('.dropdown').eq(i).trigger('mouseover')
        cy.get('.pageContent').should('have.css','z-index','-1')  
        cy.get('.dropdown').eq(i).trigger('mouseout')
        cy.get('.pageContent').should('have.css','z-index','2')      
      }
    })
  })