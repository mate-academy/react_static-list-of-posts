import React from 'react';
import './App.scss';
import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(com => com.postId === post.userId),
  };
});

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
