import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => {
  const commentsLink = comments.filter(com => com.postId === post.id);
  const user = users.find(us => us.id === post.userId) || null;

  return { ...post, commentsLink, user };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="container">
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
