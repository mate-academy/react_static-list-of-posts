import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comments } from './types/Comments';

function getComments(id: number): Comments [] {
  const comments = commentsFromServer.filter(post => post.postId === id);

  return comments;
}

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

const post = postsFromServer.map(postUser => (
  {
    ...postUser,
    user: getUser(postUser.userId),
    comments: getComments(postUser.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList post={post} />
  </section>
);
