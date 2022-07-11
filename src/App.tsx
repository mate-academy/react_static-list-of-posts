import React from 'react';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import './App.scss';

import { PostList } from './components/PostList/PostList';
import { PreparedPost } from './types/types';

const preparedPosts:PreparedPost[] = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId) || null,
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </section>
);
