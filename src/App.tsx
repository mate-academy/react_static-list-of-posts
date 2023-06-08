import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { User, Comment, Post } from './types';

function getUser(userId: number): User | null {
  const user = usersFromServer.find(owner => owner.id === userId);

  return user || null;
}

function getComments(postId: number): Comment[] {
  const comments = commentsFromServer.filter(comment => (
    comment.postId === postId));

  return comments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
