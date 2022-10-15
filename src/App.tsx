import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
// import { post } from 'cypress/types/jquery';

const collectedPost = postsFromServer.map((post) => ({
  ...post,
  user: usersFromServer.find((user) => user.id === post.userId),
  comments: commentsFromServer.filter((comment) => comment.postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={collectedPost} />
  </section>
);
