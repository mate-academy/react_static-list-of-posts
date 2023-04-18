import React from 'react';
import './App.scss';
import { PreparedPost } from './types/preparedPost';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const preparedPosts: PreparedPost[] = postsFromServer.map(
  (post) => ({
    ...post,
    author: usersFromServer
      .find(({ id }) => id === post.userId) || null,
    comments: commentsFromServer
      .filter(({ postId }) => postId === post.id),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
