import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { Post } from './types/Post';

const getUser = (userId: number) => {
  const unknownUser = {
    name: 'unknown',
    email: 'unknown',
  };

  return usersFromServer.find(user => user.id === userId)
    || unknownUser;
};

const getComments = (id: number) => commentsFromServer
  .filter(comment => comment.postId === id);

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
