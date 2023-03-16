import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';
// eslint-disable-next-line import/extensions
import { Users } from './types/users';
import { Posts } from './types/posts';
import { Comments } from './types/comments';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): Users | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}

function getComments(id: number): Comments[] {
  return commentsFromServer.filter((comment) => (
    comment.postId === id
  ));
}

export const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
