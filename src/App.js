import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './Components/PostList';

const preparedPosts = [];

posts.forEach((post) => {
  const newPost = post;

  newPost.user = users.find(user => user.id === post.userId);
  preparedPosts.push(newPost);
});

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

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
