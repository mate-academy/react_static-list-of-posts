import React from 'react';

import { PostList } from './components/PostList';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Data } from './types/Data';
import { Comment } from './types/Comment';

const dataHandler = (): Data[] => {
  const postItem: Data[] = postsFromServer.map((post) => {
    const object: Data = {
      ...post,
      user: usersFromServer
        .find(person => person.id === post.userId),
    };

    const comments: Comment[] = [];

    commentsFromServer.forEach(comment => {
      if (comment.postId === object.id) {
        comments.push(comment);
      }
    });

    if (comments.length > 0) {
      object.comments = [...comments];
    }

    return object;
  });

  return postItem;
};

const data:Data[] = dataHandler();

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList data={data} />
  </section>
);
