import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const getUser = userId => users.find(user => user.id === userId);
const getComment = id => comments.filter(comment => comment.postId === id);

const postsWithUser = posts.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList
      posts={postsWithUser}
    />
  </div>
);

export default App;
