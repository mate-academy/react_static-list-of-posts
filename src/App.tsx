import React from 'react';
import './App.scss';
import { type Comment } from './types/Comment';
import { type User } from './types/User';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): User | undefined {
  return usersFromServer.find(user => user.id === userId);
}

function getCommentsByPostId(postId: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const posts = postsFromServer.map(post => {
  const user = getUserById(post.userId);
  const comments = getCommentsByPostId(post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
