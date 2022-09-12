import React from 'react';

import './App.scss';

import { Posts } from './types/Posts';
import { Comments } from './types/Comments';
import { Users } from './types/Users';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): Users | null {
  const findUser = usersFromServer
    .find(user => user.id === userId);

  return findUser || null;
}

function getCommentById(postId: number): Comments[] | [] {
  const findComment = commentsFromServer
    .filter(comment => comment.postId === postId);

  return findComment || [];
}

export const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
