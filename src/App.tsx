import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <header className="header">
      <h1 className="header__title">Static list of posts</h1>
    </header>
    <section className="posts">
      <PostList postItems={preparedPosts} />
    </section>
  </div>
);

export default App;
