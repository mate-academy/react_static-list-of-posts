import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import { Users, Posts, Comments } from './types';

import {
  postsFromServer,
  commentsFromServer,
  usersFromServer,
} from './api';

function getCommentsPostId(postId: number): Comments[] {
  return commentsFromServer.filter(
    comment => comment.postId === postId,
  );
}

function getUserById(userId: number): Users | null {
  return usersFromServer.find(
    user => user.id === userId,
  ) || null;
}

export const post: Posts[] = postsFromServer.map(posts => ({
  ...posts,
  comments: getCommentsPostId(posts.id),
  user: getUserById(posts.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList post={post} />
  </section>
);
