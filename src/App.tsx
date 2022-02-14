import React from 'react';
import PostList from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  const user = users.find(u => u.id === post.userId);
  const postComments = comments.filter(comment => comment.postId === post.id);

  if (!user) {
    throw new Error('User not found.');
  }

  return {
    ...post,
    user,
    comments: postComments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
