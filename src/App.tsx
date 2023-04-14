import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PreparedPost } from './types/PreparedPost';

const preparedPosts: PreparedPost[] = postsFromServer.map((post) => ({
  ...post,
  user: usersFromServer
    .find(({ id }) => id === post.userId) || null,
  comments: commentsFromServer
    .filter(({ postId }) => postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
