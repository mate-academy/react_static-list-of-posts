import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { PostList } from './components/PostList';

const getUser = (userId: number) => usersFromServer
  .find(user => user.id === userId)
  || ({
    name: 'unknown',
    email: 'unknown',
  });

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
