import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(key => {
  const user = users.find(tmpUser => tmpUser.id === key.userId) || null;
  const postComments = comments.filter(tmpComment => tmpComment.postId === key.id) || null;

  return {
    ...key,
    user,
    comments: postComments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
