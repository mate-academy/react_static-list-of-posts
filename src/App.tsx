import React from 'react';

import './App.scss';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  return {
    ...post,
    user: users.find(person => person.id === post.userId) || null,
    comments: comments.filter(comment => post.id === comment.postId),
  };
});

// eslint-disable-next-line no-console
console.log(preparedPosts);

export const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);
