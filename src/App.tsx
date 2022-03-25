import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts = posts.map((postItem) => {
  const user = users.find((userItem) => userItem.id === postItem.userId);
  const commentsList = comments.filter(
    (commentItem) => commentItem.postId === postItem.id,
  );

  return { ...postItem, user, commentsList };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="mainhead">Static list of posts</h1>
    <PostList postsList={preparedPosts} />
  </div>
);

export default App;
