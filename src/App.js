import React from 'react';
import PostList from './PostList';
import users from './api/users';
import comments from './api/comments';
import posts from './api/posts';
import './App.css';

const userWhitpostAndComments = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <PostList postsCurrent={userWhitpostAndComments} />
  </div>
);

export default App;
