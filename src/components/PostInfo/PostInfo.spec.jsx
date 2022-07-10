/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { mount } from '@cypress/react';
import { PostInfo } from './PostInfo';

describe('TodoInfo', () => {
  it('should have a correct title', () => {
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

    cy.get('.PostInfo__title').should('have.text', 'et ea vero quia laudantium autem');
  });

  it('should have a user', () => {
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

    cy.get('.UserInfo').should('contain', 'Ervin Howell');
  });

  it('should have all comments', () => {
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

    cy.get('.CommentInfo').should('have.length', 3);
  });
});
