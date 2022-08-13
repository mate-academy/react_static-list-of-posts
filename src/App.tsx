import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';

import { PostList } from './components/PostList';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsById(id: number): Comment[] {
  const foundComments = commentsFromServer.filter(comment => {
    return comment.postId === id;
  });

  return foundComments;
}

const listOfPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  users: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList listOfPosts={listOfPosts} />

  </section>
);
