import React from 'react';

import './App.scss';
import { PreparedPost } from './types/PreparedPost';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const preparedPosts: PreparedPost[] = postsFromServer.map((post) => ({
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
