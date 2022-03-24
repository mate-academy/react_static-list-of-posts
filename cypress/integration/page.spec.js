'use strict';

const posts = require('../../src/api/posts.ts');
const users = require('../../src/api/users.ts');
const comments = require('../../src/api/comments.ts');

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('contsins 100 posts', () => {
    cy.get('[data-cy="post-info"]').should('have.length', 100);
  });

  it('contains posts with 5 comments for each', () => {
    for (let i = 0; i < posts.default.length; i++) {
      cy.get('[data-cy="post-info"]')
        .eq(i)
        .find('[data-cy="comments-list"]')
        .children().should('have.length', 5);
    }
  });

  it('contains posts of each user with their names', () => {
    for (let i = 0; i < users.default.length; i++) {
      cy.get('[data-cy="post-info"]')
        .eq(i * 10)
        .find('[data-cy="name"]')
        .should('contain', users.default[i].name);
    }
  });

  it('contains posts of each user with their emails', () => {
    for (let i = 0; i < users.default.length; i++) {
      cy.get('[data-cy="post-info"]')
        .eq(i * 10)
        .find('[data-cy="email"]')
        .should('contain', users.default[i].email);
    }
  });

  it('contains posts with title', () => {
    for (let i = 0; i < posts.default.length; i++) {
      cy.get('[data-cy="post-info"]')
      .eq(i)
      .find('[data-cy="post-title"]')
      .should('contain', posts.default[i].title);
    }
  });

  it('contains posts with body', () => {
    for (let i = 0; i < posts.default.length; i++) {
      cy.get('[data-cy="post-info"]')
      .eq(i)
      .find('[data-cy="post-body"]')
      .should('contain', posts.default[i].body);
    }
  });

  it('contains comments with bodies', () => {
    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * 100);

      cy.get('[data-cy="post-info"]')
      .eq(num)
      .find('[data-cy="comment-body"]')
      .eq(i).should('contain', comments.default[(num * 5) + i].body);
    }
  });

  it('contains comments with name of publisher', () => {
    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * 100);

      cy.get('[data-cy="post-info"]')
      .eq(num)
      .find('[data-cy="comment-name"]')
      .eq(i).should('contain', comments.default[(num * 5) + i].name);
    }
  });

  it('contains comments with email of publisher', () => {
    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * 100);

      cy.get('[data-cy="post-info"]')
      .eq(num)
      .find('[data-cy="comment-email"]')
      .eq(i).should('contain', comments.default[(num * 5) + i].email);
    }
  });
});
