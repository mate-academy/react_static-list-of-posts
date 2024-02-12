import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import { PostList } from './components/PostList';
import { Posts } from './types/Posts';
// eslint-disable-next-line import/extensions
import { getUser, getComment } from './components/Helpers/Helpers.jsx';

export const preparedPosts: Posts[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
