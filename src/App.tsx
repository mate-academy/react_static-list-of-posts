import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Posts';
import { User } from './types/Users';

function getUsers(userId: number) {
  const foundUser = usersFromServer.find((user: User) => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number) {
  return commentsFromServer
    .filter(comment => comment.postId === postId);
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUsers(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
