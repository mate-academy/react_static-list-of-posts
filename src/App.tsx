import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { Users } from './types/Users';
import { Comments } from './types/Comments';
import { Post } from './types/Post';

function getUser(userId: number): Users | null {
  const users = usersFromServer
    .find(user => user.id === userId);

  return users || null;
}

function getComments(postId: number): Comments[] | null {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments.length !== 0
    ? foundComments
    : null;
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
