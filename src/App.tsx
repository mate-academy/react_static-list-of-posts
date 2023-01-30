import React from 'react';

import './styles/App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post, User, Comment } from './types';

import { PostList } from './components/PostList';

const getUser = (userId: number): User | null => usersFromServer
  .find(user => user.id === userId) || null;

const getComment = (id: number): Comment[] => commentsFromServer
  .filter(comment => comment.postId === id);

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
