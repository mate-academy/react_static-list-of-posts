import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { FullPost } from './types/FullPost';
import { PostList } from './components/PostList';

function getUserById(users: User[], userId: number): User | null {
  const userFound = users.find((user) => user.id === userId);

  return userFound || null;
}

export const posts: FullPost[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(usersFromServer, post.userId),
  comments: commentsFromServer.filter((comment) => (
    comment.postId === post.id
  )),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
