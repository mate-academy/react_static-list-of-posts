import React from 'react';
import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';

import './App.scss';
import { PostList } from './components/PostList';

export const App: React.FC = () => {
  const compiledPosts = posts.map((post) => ({
    ...post,
    user: users.find(user => user.id === post.userId) ?? null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={compiledPosts} />
    </section>
  );
};
