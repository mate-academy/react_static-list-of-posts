import React from 'react';
import PostList from './PostList';
import users from './api/users';
import comments from './api/comments';
import posts from './api/posts';
import './App.css';

const userWhitpostAndComments = posts.map(post => ({
  ...post,
  userPost: users.find(user => post.userId === user.id),
  userComments: comments.filter(comment => post.id === comment.postId),
}));

const App = () => (
  <div className="App">
    <PostList post={userWhitpostAndComments} />
  </div>
);

export default App;
