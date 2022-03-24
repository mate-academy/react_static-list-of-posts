import posts from '../../src/api/posts.ts'
import users from '../../src/api/users.ts'
import comments from '../../src/api/comments.ts'

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('consists of 100 posts', () => {
    cy.getByDataCy('post-info').should('have.length', 100);
  });

  it('contains posts with 5 comments for each', () => {
    cy.getByDataCy('post-info')
      .eq(0)
      .find('[data-cy="comments-list"]')
      .children().should('have.length', 5);
  });

  it('contains posts of each user with their names', () => {
    cy.getByDataCy('post-info')
      .eq(1)
      .find('[data-cy="name"]')
      .should('contain', users[0].name);
  });

  it('contains posts of each user with their emails', () => {
    cy.getByDataCy('post-info')
      .eq(2)
      .find('[data-cy="email"]')
      .should('contain', users[0].email);
  });

  it('contains posts with title', () => {
    cy.getByDataCy('post-info')
      .eq(3)
      .find('[data-cy="post-title"]')
      .should('contain', posts[3].title);
  });

  it('contains posts with body', () => {
    cy.getByDataCy('post-info')
      .eq(4)
      .find('[data-cy="post-body"]')
      .should('contain', posts[4].body);
  });

  it('contains comments with bodies', () => {
    cy.getByDataCy('post-info')
      .eq(0)
      .find('[data-cy="comment-body"]')
      .eq(0).should('contain', comments[0].body);
  });

  it('contains comments with name of publisher', () => {
    cy.getByDataCy('post-info')
      .eq(0)
      .find('[data-cy="comment-name"]')
      .eq(0).should('contain', comments[0].name);
  });

  it('contains comments with email of publisher', () => {
    cy.getByDataCy('post-info')
      .eq(0)
      .find('[data-cy="comment-email"]')
      .eq(0).should('contain', comments[0].email);
  });
});
