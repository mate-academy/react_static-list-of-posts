import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './components/types/User';
import { Comment } from './components/types/Comment';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => userId === user.id);

  return foundUser || null;
}

function getComments(postId: number): Comment[] | [] {
  const filterComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return filterComments || [];
}

const posts = postsFromServer.map(post => ({
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
