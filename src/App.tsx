import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/users';
import { Post } from './types/posts';
import { Comment } from './types/comments';
import { PostList } from './components/PostList';

function getUserbyId(id: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === id);

  return foundUser || null;
}

function getCommentsById(postId: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserbyId(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
