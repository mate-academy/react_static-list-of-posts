/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react18';
import { PostInfo } from './PostInfo';

describe('PostInfo', () => {
  describe('', () => {
    beforeEach(() => {
      const user2 = {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
      };

      const comments = [
        {
          postId: 11,
          id: 52,
          name: 'esse autem dolorum',
          email: 'Abigail.OConnell@june.org',
          body: 'et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mollitia fugit qui repellat expedita sunt\naut fugiat vel illo quos aspernatur ducimus',
        },
        {
          postId: 11,
          id: 53,
          name: 'maiores alias necessitatibus aut non',
          email: 'Laverne_Price@scotty.info',
          body: 'a at tempore\nmolestiae odit qui dolores molestias dolorem et\nlaboriosam repudiandae placeat quisquam\nautem aperiam consectetur maiores laboriosam nostrum',
        },
        {
          postId: 11,
          id: 54,
          name: 'culpa eius tempora sit consequatur neque iure deserunt',
          email: 'Kenton_Vandervort@friedrich.com',
          body: 'et ipsa rem ullam cum pariatur similique quia\ncum ipsam est sed aut inventore\nprovident sequi commodi enim inventore assumenda aut aut\ntempora possimus soluta quia consequatur modi illo',
        },
      ];

      const postWithComments = {
        userId: 2,
        id: 11,
        title: 'et ea vero quia laudantium autem',
        body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
        user: user2,
        comments,
      };

      mount(<PostInfo post={postWithComments} />);
    });

    it('should have a correct title', () => {
      cy.get('.PostInfo__title').should(
        'have.text',
        'et ea vero quia laudantium autem',
      );
    });

    it('should have a user', () => {
      cy.get('.UserInfo').should('contain', 'Ervin Howell');
    });

    it('should contain all comments', () => {
      cy.get('.CommentInfo').should('have.length', 3);
      cy.get('.CommentInfo__name')
        .eq(0)
        .should('have.text', 'esse autem dolorum');
      cy.get('.CommentInfo__name')
        .eq(2)
        .should(
          'have.text',
          'culpa eius tempora sit consequatur neque iure deserunt',
        );
    });

    it('should not show NoCommentsMessage', () => {
      cy.getByDataCy('NoCommentsMessage').should('not.exist');
    });
  });

  describe('', () => {
    it('should render no comments message is there are no comments', () => {
      const user2 = {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
      };

      const postWithoutComments = {
        userId: 2,
        id: 11,
        title: 'et ea vero quia laudantium autem',
        body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
        user: user2,
        comments: [],
      };

      mount(<PostInfo post={postWithoutComments} />);

      cy.getByDataCy('NoCommentsMessage').should('exist');
      cy.get('.CommentInfo').should('not.exist');
    });

    it('should render another post info', () => {
      const user1 = {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      };

      const post1Comments = [
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
      ];

      const otherPost = {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
        user: user1,
        comments: post1Comments,
      };

      mount(<PostInfo post={otherPost} />);

      cy.get('.PostInfo__title').should(
        'have.text',
        'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      );
      cy.get('.UserInfo').should('contain', 'Leanne Graham');
      cy.get('.CommentInfo').should('have.length', 2);
      cy.get('.CommentInfo__name')
        .eq(0)
        .should('have.text', 'id labore ex et quam laborum');
    });
  });
});
