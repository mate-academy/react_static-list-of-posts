import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';

// eslint-disable-next-line import/no-cycle
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
