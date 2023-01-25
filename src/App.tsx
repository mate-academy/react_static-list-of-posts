import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

const posts = postsFromServer.map((post) => {
  const { userId, id } = post;

  return {
    ...post,
    user: usersFromServer.find((user) => userId === user.id),
    comments: commentsFromServer.filter(({ postId }) => postId === id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
