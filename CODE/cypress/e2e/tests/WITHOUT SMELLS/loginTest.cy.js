//File : loginTest.cy.js

describe('TEST', () => {

   const expectedText = {
     textMenu: 'administrator'
    };


    it('Login Test', { tags: '@smoke' } , () => {
   
  
     const username = Cypress.config('username');
     const password = Cypress.config('password');
     

     cy.visit('/login_page.php');

     cy.get('[id="username"]').clear().type(username);
    
     cy.get('input[type="submit"]').click();
          
     cy.get('[id="password"]').clear().type(password);
    
     cy.get('input[type="submit"]').click();

     cy.get('.user-info').invoke('text').should('include', expectedText.textMenu);
  });

});