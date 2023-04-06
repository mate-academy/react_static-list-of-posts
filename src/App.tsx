import React from 'react';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';

import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
// import { post } from 'cypress/types/jquery';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}

function getComment(postId: number): Comment[] | null {
  const foundComment = commentsFromServer.filter(comment => (
    comment.postId === postId));

  // if there is no user with a given userId
  return foundComment || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comment: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList list={posts} />
  </section>
);
