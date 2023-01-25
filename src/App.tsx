import React from 'react';

import './App.scss';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getUser = (userId: number): User | null => {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

const getComments = (postId: number): Comment[] => {
  return commentsFromServer.filter(comment => (
    comment.postId === postId
  ));
};

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
