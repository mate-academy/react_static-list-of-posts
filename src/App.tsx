import React from 'react';

import './App.scss';
import { User } from './types/User';
import { Comments } from './types/Comments';
import { Posts } from './types/Posts';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUsersById(userId:number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getPostsById(postId:number):Comments[] {
  return commentsFromServer.filter(comment => comment.postId === postId) || [];
}

const postsArray: Posts[] = postsFromServer.map((post) => ({
  ...post,
  user: getUsersById(post.userId),
  comments: getPostsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsArray} />
  </section>
);
