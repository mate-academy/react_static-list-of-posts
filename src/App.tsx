import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { getUsers, getComments } from './additionalFunctions';

const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUsers(post.userId, usersFromServer),
    comments: getComments(post.id, commentsFromServer),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
