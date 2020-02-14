import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => (
  {
    ...post,
    comment: comments.filter(comment => comment.postId === post.userId),
    user: users.find(user => user.id === post.userId),
  }
));

const App = () => (
  <div className="App">
    <h1 className="title is-1 is-spaced">Static list of posts</h1>

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
