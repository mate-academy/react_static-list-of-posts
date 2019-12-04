import React from 'react';
import PostList from './PostList';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const getAllInfo = (postsData, people, commentsData) => (
  postsData.map(post => (
    {
      ...post,
      user: people.find(person => post.userId === person.id),
      comments: commentsData.filter(comment => comment.postId === post.id),
    }
  ))
);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList info={getAllInfo(posts, users, comments)} />
  </div>
);

export default App;
