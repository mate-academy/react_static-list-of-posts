import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  return {
    ...post,
    user: users.find(user => post.userId === user.id) || null,
    comments: comments.filter(comment => post.id === comment.postId),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPost={preparedPosts} />
  </div>
);

export default App;
