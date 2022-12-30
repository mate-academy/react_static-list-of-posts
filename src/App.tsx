import React from 'react';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import './App.scss';
import { PostList } from './components/PostList';
import { Post } from './Types/post';

const getComment = (id: number) => commentsFromServer
  .filter((comment) => comment.postId === id);

const getUser = (userId: number) => {
  const unknownUser = {
    name: 'unknown',
    email: 'unknown',
  };

  return usersFromServer.find((user) => user.id === userId)
    || unknownUser;
};

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComment(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
