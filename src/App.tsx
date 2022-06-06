import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

// import { ExtendedPost } from './types';

const preparedPosts = posts.map(post => {
  const us = users.find(user => user.id === post.userId) || null;
  const coms = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user: us,
    comments: coms,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>

    <PostList preparedPosts={preparedPosts} />

  </div>
);

export default App;
