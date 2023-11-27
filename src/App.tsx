import React from 'react';
import { PostList } from './components/PostList';
import { User, Comment, Post } from './types/types';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function findUser(userId: number): User | null {
  const someUser = usersFromServer.find((user) => user.id === userId);

  return someUser || null;
}

function findComments(id: number): Comment[] {
  const someComments = commentsFromServer.filter(
    (comment) => comment.postId === id,
  );

  return someComments;
}

export const Posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: findUser(post.userId),
  comments: findComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={Posts} />
  </section>
);
