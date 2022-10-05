import React from 'react';

import './App.scss';
import { getComments, getUser } from './utils/postsUtils';
import { PostList } from './components/PostList';
import { Post } from './Interfaces/Posts';
import postsFromServer from './api/posts';

const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(Number(post.userId)),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
