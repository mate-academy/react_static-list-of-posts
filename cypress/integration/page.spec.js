/* eslint-disable max-len */

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should contain all the posts', () => {
    cy.get('.PostInfo').should('have.length', 20);
  });

  it('should rended posts in the correct order', () => {
    cy.get('.PostInfo__title').eq(0)
      .should('have.text', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');

    cy.get('.PostInfo__title').eq(19)
      .should('have.text', 'aut amet sed');
  });

  it('should add corresponding users', () => {
    cy.get('.UserInfo').should('have.length', 20);
    cy.get('.UserInfo').eq(0).should('have.text', 'Leanne Graham');
    cy.get('.UserInfo').eq(19).should('have.text', 'Clementina DuBuque');
  });

  it('should add corresponding comments', () => {
    cy.get('.PostInfo').eq(0).find('.CommentInfo').should('have.length', 5);
    cy.get('.PostInfo').eq(1).find('.CommentInfo').should('not.exist');
    cy.get('.PostInfo').eq(2).find('.CommentInfo').should('have.length', 3);
  });
});
