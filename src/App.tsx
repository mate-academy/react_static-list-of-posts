import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import postsFromServer from './api/posts';

import { Post } from './Types/post';
import { User } from './Types/user';
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
    <PostList
      posts={posts}
    />
  </section>
);
