import React from 'react';

import './App.scss';
import { Post } from './types/api.types';
import postsFromServer from './api/posts';
import { PostList } from './components/PostList/PostList';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserByID(userId: number) {
  const currentUser = usersFromServer.find(user => user.id === userId);

  return currentUser || null;
}

function getCommentsByID(postId: number) {
  const comments
  = commentsFromServer.filter(comment => comment.postId === postId);

  return comments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserByID(post.userId),
  comments: getCommentsByID(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      posts={posts}
    />
  </section>
);
