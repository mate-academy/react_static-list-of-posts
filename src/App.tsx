import React from 'react';
import { PostList } from './components/PostList';
import { Posts } from './types/Posts';
import { Users } from './types/Users';
import { Comments } from './types/Comments';

import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): Users | null {
  const existingUser = usersFromServer.find(user => (userId === user.id));

  return existingUser || null;
}

function getComments(postId: number): Comments[] {
  return commentsFromServer.filter(comment => (
    postId === comment.postId
  ));
}

export const preparePosts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparePosts} />
  </section>
);
