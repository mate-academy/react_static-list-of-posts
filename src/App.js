import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => (
  {
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
    user: users.find(user => user.id === post.userId),
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

    <div className="main-content">
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
