import React from 'react';

import './App.scss';

import { User } from './types/user';
import { Comment } from './types/comment';
import { Post } from './types/post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

function getUser(userId: number): User {
  const foundUser = usersFromServer.find(
    user => user.id === userId,
  );

  if (!foundUser) {
    throw new Error('Can not find a User!!!');
  }

  return foundUser;
}

function getComments(postId: number): Comment[] {
  return commentsFromServer.filter(
    comment => comment.postId === postId,
  );
}

const posts: Post[] = postsFromServer.map(post => ({
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
