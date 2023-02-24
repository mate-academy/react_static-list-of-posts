import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './components/types/Post';

export const getCommentsByPostId = (postId: number) => {
  return commentsFromServer.filter((comment) => comment.postId === postId);
};

export const getUserByUserId = (userId: number) => {
  return usersFromServer.find((user) => user.id === userId) || null;
};

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsByPostId(post.id),
  user: getUserByUserId(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
