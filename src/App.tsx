import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { PostList } from './components/PostList/PostList';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

export function getUser(usersId: number):User | null {
  return usersFromServer.find(user => user.id === usersId) || null;
}

export function getComments(postId: number):Comment[] {
  const foundComments = commentsFromServer.filter(comment => (
    comment.postId === postId
  ));

  return foundComments;
}

export const mergedData : Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={mergedData} />
  </section>
);
