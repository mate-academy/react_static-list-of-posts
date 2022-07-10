import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = postsFromServer.map(post => (
  {
    ...post,
    poster: usersFromServer.find(user => user.id === post.userId) || null,
    comments: commentsFromServer.filter(
      comment => comment.postId === post.id,
    ) || null,
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
