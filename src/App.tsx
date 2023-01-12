import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import type { Post } from './types/Post';
import { PostList } from './components/PostList';

const getUser = (userId: number) => {
  const unknown = {
    name: 'unknown',
    email: 'unknown',
  };

  return usersFromServer.find(user => userId === user.id) || unknown;
};

const getComments = (id: number) => commentsFromServer
  .filter(comment => comment.postId === id);

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
