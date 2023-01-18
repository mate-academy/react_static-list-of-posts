import React from 'react';

import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { TotalInfo } from './types/TotalInfo';
import { Comments } from './types/Comments';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(id: number): Comments[] {
  const foundComments = commentsFromServer.filter(
    comment => comment.postId === id,
  );

  return foundComments;
}

export const todos: TotalInfo[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  arrayOfComments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postInfo={todos} />
  </section>
);
