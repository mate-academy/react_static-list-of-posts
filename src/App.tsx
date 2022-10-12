import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './components/types/Post';
import { Comment } from './components/types/Comment';
import { User } from './components/types/User';

type GetComments = (postId: number) => Comment[] | [];
type GetUser = (id: number) => User | null;

export const getComments: GetComments = (postId): Comment[] => {
  return commentsFromServer.filter((comment) => comment.postId === postId);
};

export const getUser:GetUser = (userId) => {
  return usersFromServer.find((user) => user.id === userId) || null;
};

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
