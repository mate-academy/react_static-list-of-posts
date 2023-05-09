import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/user';

const posts = postsFromServer.map((post) => {
  const comments = commentsFromServer
    .filter(comment => comment.postId === post.id);

  return {
    ...post,
    user: usersFromServer.find((user: User) => user.id === post.userId) || null,
    comments: comments.length ? comments : [],
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
