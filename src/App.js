import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import CreatePosts from './components/PostList';

const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <CreatePosts info={getAllPostsInfo(posts, users, comments)} />
  </div>
);

const getAllPostsInfo = (postData, people, commentData) => (
  postData.map(post => (
    {
      ...post,
      user: people.find(person => post.userId === person.id),
      comments: commentData.filter(comment => comment.postId === post.id),
    }
  ))
);

export default App;
