/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react';
import { CommentList } from './CommentList';
import comments from '../../api/comments';

describe('CommentList component', () => {
  it('should render a comments', () => {
    mount(<CommentList comments={comments} />);

    cy.get('.comment')
      .should('have.length', comments.length);
  });
});
