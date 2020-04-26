import React from 'react';
import PostList from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => {
  const preparedPosts = posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="App">
      <h1 className="app__header">Static list of posts</h1>

      <PostList preparedPosts={preparedPosts} />
    </div>
  );
};

export default App;
