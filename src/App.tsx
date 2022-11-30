import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';

import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  return usersFromServer.find((user) => user.id === userId) || null;
}

function getComment(postId: number): Comment[] {
  const foundComment = commentsFromServer.filter((comment) => (
    comment.postId === postId));

  return foundComment;
}

const posts = postsFromServer.map((post) => ({
  ...post,
  comments: getComment(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
