import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './PostList/PostList';

const App: React.FC = () => {
  const preparedPosts = posts.map(post => {
    const { userId } = post;
    const user = users.find(userElement => userElement.id === userId) || null;

    return {
      user,
      comments,
      post,
    };
  });

  return (
    <div className="App">
      <h1 className="title">Static list of posts</h1>
      <PostList postList={preparedPosts} />
    </div>
  );
};

export default App;
