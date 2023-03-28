import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Users } from './types/Users';
import { Comments } from './types/Comments';
import { Posts } from './types/Posts';
import { PostList } from './components/PostList';

const getUserById = (userId: number): Users | null => {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

const getCommentsByPostId = (postId: number): Comments[] => {
  return commentsFromServer.filter(comment => comment.postId === postId);
};

export const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
