import React from 'react';
import PostList from './components/PostList/PostList';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
