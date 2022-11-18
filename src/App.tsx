import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const neededUser = usersFromServer.find(user => (
    user.id === userId
  ));

  return neededUser || null;
}

function getComments(id: number): Comment[] {
  const neededComments = commentsFromServer.filter(comment => (
    comment.postId === id
  ));

  return neededComments;
}

export const prepatedPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={prepatedPosts} />
  </section>
);
