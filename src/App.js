import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const preparedPosts = posts.map(item => (
  {
    ...item,
    user: users.find(person => (person.id === item.userId)),
    comments: comments.filter(comment => comment.postId === item.id),
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <p>
      <span>posts: </span>
      {posts.length}
    </p>

    <p>
      <span>comments: </span>
      {comments.length}
    </p>

    <p>
      <span>Users: </span>
      {users.length}
    </p>

    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
