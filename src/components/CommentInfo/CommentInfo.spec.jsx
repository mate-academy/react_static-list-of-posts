/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react18';
import { CommentInfo } from './CommentInfo';

describe('CommentInfo component', () => {
  beforeEach(() => {
    const comment = {
      postId: 3,
      id: 11,
      name: 'Comment name',
      email: 'author@email.test',
      body: 'Some comment text',
    };

    mount(<CommentInfo comment={comment} />);
  });

  it('should show a name', () => {
    cy.get('.CommentInfo__name').should('have.text', 'Comment name');
  });

  it('should show an email', () => {
    cy.get('.CommentInfo__email')
      .should('have.text', 'author@email.test')
      .and('have.attr', 'href', 'mailto:author@email.test');
  });

  it('should show a body', () => {
    cy.get('.CommentInfo__body').should('have.text', 'Some comment text');
  });
});
