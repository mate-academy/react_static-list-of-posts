import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import usersFromServer from './api/users';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find((user: User) => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer.filter((comment: Comment) => (
    comment.postId === postId
  ));

  return foundComments;
}

const updatedPost: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={updatedPost} />
  </section>
);
