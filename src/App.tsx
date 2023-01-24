import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { TotalPostInfo } from './types/TotalPostInfo';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getComments(postId: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getUser(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const totalPostInfo: TotalPostInfo[]
  = postsFromServer.map(post => ({
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={totalPostInfo} />
  </section>
);
