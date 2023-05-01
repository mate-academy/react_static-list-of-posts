import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PreparedPost } from './types/PreparedPost';
import { PostList } from './components/PostList';
import { User } from './types/User';

const correctUser = (userId: number): User | null => {
  return usersFromServer.find(({ id }) => id === userId) || null;
};

const correctComments = (id: number): Comment[] => {
  return commentsFromServer
    .filter(({ postId }) => (postId === id));
};

const preparedPost: PreparedPost[] = postsFromServer.map(
  post => ({
    ...post,
    user: correctUser(post.userId),
    comments: correctComments(post.id),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPost} />
  </section>
);
