import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { FullPost } from './types/Post';
import { User } from './types/User';

import { PostList } from './components/PostList';

function getUser(postUserId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === postUserId);

  return foundUser || null;
}

const getComments = (postId: number) => commentsFromServer
  .filter(comment => comment.postId === postId);

export const fullPosts: FullPost[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={fullPosts} />
  </section>
);
