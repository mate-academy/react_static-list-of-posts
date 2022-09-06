import React from 'react';

import './App.scss';

import { User } from './types/User';
import { Posts } from './types/Posts';
import { Comments } from './types/Comments';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const userFind = usersFromServer.find(user => userId === user.id);

  return userFind || null;
}

function getComments(postId: number): Comments[] | null {
  const commentFind = commentsFromServer.filter((comment) => (
    postId === comment.postId));

  return commentFind.length > 0
    ? commentFind
    : null;
}

const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.id),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postList={posts} />
  </section>
);
