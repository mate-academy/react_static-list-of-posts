import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import { Post, Comment, User } from './types/index';
import {
  postsFromServer,
  commentsFromServer,
  usersFromServer,
} from './api/index';

function getUser(userId: number): User | null {
  const findUser = usersFromServer.find(user => user.id === userId);

  return findUser || null;
}

function getComment(postId: number): Comment[] {
  return commentsFromServer.filter(
    comment => comment.postId === postId,
  );
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),

}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
