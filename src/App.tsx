import React from 'react';

import './App.scss';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { PreparedPost } from './types/PreparedPost';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer
    .find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments;
}

export const preparedPosts: PreparedPost[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList preparedPosts={preparedPosts} />
  </section>
);
