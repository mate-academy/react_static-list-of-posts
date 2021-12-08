import React from 'react';
import './App.scss';

import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map((post) => {
  const userLink = users.find(user => post.userId === user.id);
  const commentsArray = comments.filter(comment => post.id === comment.postId);

  return {
    user: userLink || null,
    comments: commentsArray,
    ...post,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
