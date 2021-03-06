import React from 'react';
import PostList from './components/PostList';

import './App.scss';

import { posts } from './api/posts';
import { comments } from './api/comments';
import { users } from './api/users';

const addedUsersWithinPosts = posts.map(
  post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
  }),
);

const App = () => (
  <div className="App">
    <h1 className="app__title">
      Static list of posts
    </h1>
    <PostList
      comments={comments}
      addedUsersWithinPosts={addedUsersWithinPosts}
    />
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
  </div>
);

export default App;
