import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';

import { PostList } from './components/PostList';

function getUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsByPostId(id: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === id);
}

export const postsWithUsersAndComments: Post[]
= postsFromServer.map(postElement => (
  {
    ...postElement,
    user: getUserById(postElement.userId),
    comments: getCommentsByPostId(postElement.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsWithUsersAndComments} />
  </section>
);
