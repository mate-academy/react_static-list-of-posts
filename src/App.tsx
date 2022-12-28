import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Post } from './types/Post';
import { PostList } from './components/PostList';
import { Comment } from './types/Comment';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsById(commentId: number): Comment[] {
  const foundComments = commentsFromServer
    .filter(comment => commentId === comment.postId);

  return foundComments;
}

export const postsWithUserAndComments: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsWithUserAndComments} />
  </section>
);
