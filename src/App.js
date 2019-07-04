import React from 'react';
import PostList from './PostList';

import users from './api/users';
import comments from './api/comments';
import posts from './api/posts';
import './App.css';

const userWhitpostAndComments = posts.map(post => ({
  ...post,
  userPost: users.find(user => user.id === post.userId),
  userComments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <PostList posts={userWhitpostAndComments} />
  </div>
);

export default App;
