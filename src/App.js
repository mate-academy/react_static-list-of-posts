import React from 'react';

import './App.css';

import postsList from './api/posts';
import commentsList from './api/comments';
import usersList from './api/users';
import PostList from './api/PostList';

function postUserComment(posts, users, comments) {
  return posts.map(item => (
    {
      ...item,
      user: users.find(person => person.id === item.userId),
      comment: comments.filter(elem => elem.postId === item.id),
    }));
}

const App = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList postUserComment={
      postUserComment(postsList, usersList, commentsList)}
    />
  </div>
);

export default App;
