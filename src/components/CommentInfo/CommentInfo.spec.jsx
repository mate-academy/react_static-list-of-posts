import React from 'react';
import { mount } from '@cypress/react';
import { CommentInfo } from './CommentInfo';
import comments from '../../api/comments';

describe('CommentInfo component', () => {
  it('should show a \'name\'', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    mount(<CommentInfo
      comment={
        { name: comments[0].name }
      }
    />);

    cy.getByDataCy('comment-name')
      .should('contain', comments[0].name);
  });

  it('should show a \'body\'', () => {
    mount(<CommentInfo
      comment={
        { body: comments[0].body }
      }
    />);

    cy.getByDataCy('comment-body')
      .should('contain', comments[0].body);
  });

  it('should show an \'email\'', () => {
    mount(<CommentInfo
      comment={
        { email: comments[0].email }
      }
    />);

    cy.getByDataCy('comment-email')
      .should('contain', comments[0].email);
  });
});
