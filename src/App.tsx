import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

function getPostComments(id: number) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

function getPostUser(id: number) {
  return usersFromServer.filter(user => user.id === id);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: getPostComments(post.id),
  user: getPostUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
