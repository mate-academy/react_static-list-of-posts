/* eslint-disable object-curly-newline */
import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { Post, PostWithDetails, User, Comment } from './types';

import { PostList } from './components/PostList/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const commentsMatching = commentsFromServer
    .filter(comment => comment.postId === postId);

  return commentsMatching;
}

const postsUpdated: PostWithDetails[] = postsFromServer.map((post: Post) => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsUpdated} />
  </section>
);
