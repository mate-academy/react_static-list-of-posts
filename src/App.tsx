import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  const user = users.find(tmpUser => tmpUser.id === post.userId) || null;
  const postComments = comments.filter(tmpComment => tmpComment.postId === post.id);

  return {
    ...post,
    user,
    comments: postComments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>

    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
