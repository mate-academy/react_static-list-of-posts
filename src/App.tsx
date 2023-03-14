import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comments } from './types/Comments';
import { Posts } from './types/Posts';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getUserById = (userId: number): User | null => {
  return usersFromServer.find(user => user.id === userId) || null;
};

const getCommentsById = (postId: number): Comments[] => {
  return commentsFromServer.filter(comment => comment.postId === postId);
};

const getPosts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={getPosts} />
  </section>
);
