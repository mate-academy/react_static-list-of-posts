import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function findUser(userId: number): User | null {
  return usersFromServer.find(({ id }) => id === userId) || null;
}

function findComments(id: number): Comment[] | null {
  const comments = commentsFromServer.filter(({ postId }) => postId === id);

  return comments.length !== 0 ? comments : null;
}

const postsForRender = postsFromServer.map(post => (
  {
    ...post,
    user: findUser(post.userId),
    comments: findComments(post.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsForRender} />
  </section>
);
