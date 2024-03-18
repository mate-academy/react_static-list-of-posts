/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react18';
import { CommentList } from './CommentList';

describe('CommentList component', () => {
  describe('', () => {
    beforeEach(() => {
      const comments = [
        {
          postId: 1,
          id: 1,
          name: 'id labore ex et quam laborum',
          email: 'Eliseo@gardner.biz',
          body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        },
        {
          postId: 1,
          id: 2,
          name: 'quo vero reiciendis velit similique earum',
          email: 'Jayne_Kuhic@sydney.com',
          body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
        },
        {
          postId: 1,
          id: 3,
          name: 'odio adipisci rerum aut animi',
          email: 'Nikita@garfield.biz',
          body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
        },
        {
          postId: 1,
          id: 4,
          name: 'alias odio sit',
          email: 'Lew@alysha.tv',
          body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
        },
      ];

      mount(<CommentList comments={comments} />);
    });

    it('should contain all comments', () => {
      cy.get('.CommentInfo').should('have.length', 4);
    });

    it('should render comments in correct order', () => {
      cy.get('.CommentInfo__name')
        .eq(0)
        .should('have.text', 'id labore ex et quam laborum');

      cy.get('.CommentInfo__name').eq(3).should('have.text', 'alias odio sit');
    });
  });

  describe('', () => {
    it('should not have comments if received an empty array', () => {
      mount(<CommentList comments={[]} />);

      cy.get('.CommentInfo').should('not.exist');
    });
  });
});
