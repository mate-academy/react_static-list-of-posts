import React from 'react';
import { FullPost } from './types/FullPost';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
// import { post } from 'cypress/types/jquery';

const fullPosts: FullPost[] = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(({ id }) => id === post.userId),
  comments: commentsFromServer.filter(({ postId }) => postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList fullPosts={fullPosts} />

  </section>
);
