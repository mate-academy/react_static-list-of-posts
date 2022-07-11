import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id || null),
  comments: comments.filter(comment => post.id === comment.postId),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <section className="App__list">
      <PostList posts={preparedPosts} />
    </section>
  </div>
);

export default App;
