import React from 'react';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';

import './App.scss';

function findUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments;
}

export const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: findUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
