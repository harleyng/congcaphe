describe('Test load more button', () => {
    it('Menu Page', () => {
      let visible = 6
      cy.visit('http://localhost:3000/menu/all')
      cy.get('.item-container:visible').should('have.length', visible)
      while (visible < 48) {
        cy.get('#load').trigger('click').then(() => {
          if (visible += 6 < 48) visible += 6
          else visible = 48
        })
        cy.get('.item-container:visible').should('have.length', visible)
      } 
    })
    it('Grocery Page', () => {
      let visible = 6
      cy.visit('http://localhost:3000/grocery/all')
      cy.get('.item-container:visible').should('have.length', visible)
      while (visible < 48) {
        cy.get('#load').trigger('click').then(() => {
          if (visible += 6 < 48) visible += 6
          else visible = 48
        })
        cy.get('.item-container:visible').should('have.length', visible)
      } 
    })
    it('Post Page', () => {
      let visible = 6
      cy.visit('http://localhost:3000/posts/all')
      cy.get('.item-container:visible').should('have.length', visible)
      while (visible < 48) {
        cy.get('#load').trigger('click').then(() => {
          if (visible += 6 < 48) visible += 6
          else visible = 48
        })
        cy.get('.item-container:visible').should('have.length', visible)
      } 
    })
  })