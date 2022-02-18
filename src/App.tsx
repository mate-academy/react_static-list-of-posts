import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  const postUser = users.find(user => user.id === post.userId);

  if (!postUser) {
    throw new Error('no user found');
  }

  return {
    ...post,
    user: postUser,
    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
