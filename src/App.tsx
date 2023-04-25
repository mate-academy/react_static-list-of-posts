import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const posts = postsFromServer.map(post => {
  const comments = commentsFromServer.filter(comm => comm.postId === post.id);

  return (
    {
      ...post,
      user: usersFromServer.find(user => user.id === post.userId) || null,
      comments: comments.length ? comments : null,
    }
  );
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
