import React from 'react';
import { PreparedPost } from './types/PreparedPost';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUser(id: number): User | null {
  const foundedUser = usersFromServer.find(user => user.id === id);

  return foundedUser || null;
}

function getComment(id: number): Comment[] {
  return commentsFromServer.filter(({ postId }) => postId === id);
}

const preparedPost: PreparedPost[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPost={preparedPost} />

  </section>
);
