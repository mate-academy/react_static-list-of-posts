import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { Posts } from './types/Posts';
import { Comment } from './types/Comments';
import { User } from './types/User';

function setUser(user: number): User | null {
  const findUser = usersFromServer.find(userFound => userFound.id === user);

  return findUser || null;
}

function setComments(comment: number): Comment[] {
  const findComments = commentsFromServer.filter(
    commentFound => commentFound.postId === comment,
  );

  return findComments;
}

export const postsDone: Posts[] = postsFromServer.map(generatePosts => ({
  ...generatePosts,
  user: setUser(generatePosts.userId),
  comments: setComments(generatePosts.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsDone} />
  </section>
);
