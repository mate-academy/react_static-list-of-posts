import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/user';
import { Comment } from './types/comment';
import { PostList } from './components/PostList';

function getUser(id:number): User | null {
  return usersFromServer
    .find(user => user.id === id) || null;
}

function getComments(id:number): Comment[] {
  return commentsFromServer
    .filter(comment => comment.postId === id);
}

const posts = postsFromServer
  .map(post => ({
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
