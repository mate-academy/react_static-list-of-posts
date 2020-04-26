import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const App = () => {
  const res = posts.map(item => ({
    ...item,
    comments: comments.filter(value => value.postId === item.id),
    user: users.find(person => person.id === item.userId),
  }));

  return (
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

      <PostList data={res} />
    </div>
  );
};

export default App;
