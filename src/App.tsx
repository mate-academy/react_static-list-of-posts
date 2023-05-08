import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from '../types/Post';

const getPostAuthorById = (postId: number) => {
  return usersFromServer.find(user => user.id === postId) || null;
};

const getPostCommentsById = (postId: number) => {
  return commentsFromServer
    .filter(comment => comment.postId === postId);
};

const posts: Post[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getPostAuthorById(post.userId),
    comments: getPostCommentsById(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
