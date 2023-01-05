import React from 'react';

import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const getUserById = (userId: number) => (
  usersFromServer.find(user => user.id === userId)
) || null;

const getCommentsByPostId = (postId: number) => (
  commentsFromServer.filter(comment => (
    comment.postId === postId
  ))
);

const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsByPostId(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
