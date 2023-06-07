import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Users } from './types/Users';
import { Comments } from './types/Comments';
import { Posts } from './types/Posts';
import { PostList } from './components/PostList';

function getComment(postId: number): Comments[] {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getUser(userId: number): Users | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />

  </section>
);
