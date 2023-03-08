import React from 'react';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

import './App.scss';

function getUserByID(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsByPostID(id: number): Comment[] {
  const foundComments = commentsFromServer
    .filter(comment => id === comment.postId);

  return foundComments || null;
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserByID(post.userId),
  comments: getCommentsByPostID(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
