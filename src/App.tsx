import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { findUser } from './functions/findUser';
import { getComments } from './functions/getComments';

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: findUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
