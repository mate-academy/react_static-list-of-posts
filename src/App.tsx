import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map((post) => {
  return {
    ...post,
    userLink: users.find((user) => (user.id === post.userId)) || null,
    commentLink: comments.filter(comment => (comment.postId === post.id)),
  };
});

const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);

export default App;
