import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import { Users, Posts, Comments } from './types/index';

import {
  postsFromServer,
  commentsFromServer,
  usersFromServer,
} from './api/index';

function getComments(postId: number): Comments[] {
  const foundComments = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return foundComments;
}

function getUser(userId: number): Users | null {
  const foundUser = usersFromServer.find(
    user => user.id === userId,
  );

  return foundUser || null;
}

export const post: Posts[] = postsFromServer.map(posts => ({
  ...posts,
  comments: getComments(posts.id),
  user: getUser(posts.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList post={post} />
  </section>
);
