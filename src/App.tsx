import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';

import { PostList } from './components/PostList';

function getUser(userId: number): User {
  const foundUser = usersFromServer.find(user => user.id === userId);

  if (!foundUser) {
    throw new Error(`User not found for userId: ${userId}`);
  }

  return foundUser;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: commentsFromServer.filter(comment => post.id === comment.postId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
