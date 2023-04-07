/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import { Post } from './types/Post';
import { User } from './types/User';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Comment } from './types/Comment';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(
    user => user.id === userId,
  );

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  return commentsFromServer.filter((comment): Comment => comment.postId === postId);
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.userId),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
