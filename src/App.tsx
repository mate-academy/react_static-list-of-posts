import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

const preparedPosts = posts.map((post) => {
  const user = users.find((currentUser) => (
    currentUser.id === post.userId
  )) || null;
  const comment = comments.filter((currentComment) => (
    currentComment.postId === post.id
  ));

  return {
    ...post,
    comment,
    user: user || null,
  };
});

export const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">
      Static list of posts
    </h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
