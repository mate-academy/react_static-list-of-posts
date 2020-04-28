import React from 'react';
import PostList from './components/PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => {
  const preparedPosts = posts.map(item => ({
    ...item,
    user: users.find(user => user.id === item.userId),
    comments: comments.filter(comment => item.id === comment.postId),
  }));

  return (
    <div className="App">
      <h1 className="App__head">Static list of posts</h1>
      <PostList post={preparedPosts} />
    </div>
  );
};

export default App;
