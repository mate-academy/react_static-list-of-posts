import React from 'react';
import { mount } from '@cypress/react';
import { CommentList } from './CommentList';
import comments from '../../api/comments';

describe('CommentList component', () => {
  it('should render a comments', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    mount(<CommentList comments={comments} />);

    cy.get('.comment')
      .should('have.length', comments.length);
  });
});
