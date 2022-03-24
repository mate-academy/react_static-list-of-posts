import posts from '../../src/api/posts.ts'
import users from '../../src/api/users.ts'
import comments from '../../src/api/comments.ts'

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('consists of 100 posts', () => {
    cy.getByDataCy('post-info')
      .should('have.length', posts.length);
  });

  it('contains posts with 5 comments for each', () => {
    cy.getByDataCy('post-info')
      .selectElement('comments-list')
      .children()
      .should('have.length', 5);
  });

  it('contains posts of each user with their names', () => {
    cy.getByDataCy('post-info')
      .selectElement('name', 1)
      .should('contain', users[0].name);
  });

  it('contains posts of each user with their emails', () => {
    cy.getByDataCy('post-info')
      .selectElement('email', 2)
      .should('contain', users[0].email);
  });

  it('contains posts with title', () => {
    cy.getByDataCy('post-info')
      .selectElement('post-title', 3)
      .should('contain', posts[3].title);
  });

  it('contains posts with body', () => {
    cy.getByDataCy('post-info')
      .selectElement('post-body', 4)
      .should('contain', posts[4].body);
  });

  it('contains comments with bodies', () => {
    cy.getByDataCy('post-info')
      .selectElement('comment-body')
      .eq(0)
      .should('contain', comments[0].body);
  });

  it('contains comments with name of publisher', () => {
    cy.getByDataCy('post-info')
      .selectElement('comment-name')
      .eq(0)
      .should('contain', comments[0].name);
  });

  it('contains comments with email of publisher', () => {
    cy.getByDataCy('post-info')
      .selectElement('comment-email')
      .eq(0)
      .should('contain', comments[0].email);
  });
});
