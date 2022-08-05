/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react';
import { CommentInfo } from './CommentInfo';

describe('CommentInfo component', () => {
  it('should show a name', () => {
    const comment = {
      postId: 3,
      id: 11,
      name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
      email: 'Veronica_Goodwin@timmothy.net',
      body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
    };

    mount(<CommentInfo comment={comment} />);

    cy.get('.CommentInfo__name')
      .should('have.text', 'fugit labore quia mollitia quas deserunt nostrum sunt');
  });

  it('should show an email', () => {
    const comment = {
      postId: 3,
      id: 11,
      name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
      email: 'Veronica_Goodwin@timmothy.net',
      body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
    };

    mount(<CommentInfo comment={comment} />);

    cy.get('.CommentInfo__email')
      .should('have.text', 'Veronica_Goodwin@timmothy.net')
      .should('have.attr', 'href', 'mailto:Veronica_Goodwin@timmothy.net');
  });

  it('should show a body', () => {
    const comment = {
      postId: 3,
      id: 11,
      name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
      email: 'Veronica_Goodwin@timmothy.net',
      body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
    };

    mount(<CommentInfo comment={comment} />);

    cy.get('.CommentInfo__body')
      .should('have.text', 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea');
  });
});
