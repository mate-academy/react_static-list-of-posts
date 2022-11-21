import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';

const getUserFromServer = (userId: number) => usersFromServer
  .find(user => user.id === userId);

const getCommentsFromServer = (postId: number) => commentsFromServer
  .filter(comment => comment.postId === postId);

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserFromServer(post.userId) || null,
  comments: getCommentsFromServer(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
