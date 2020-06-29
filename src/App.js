import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map((post) => {
  const author = users.find(user => user.id === post.userId);

  return {
    ...post,
    name: author.name,
    email: author.email,
    address: author.address,
    comments: comments.filter(comment => comment.postId === post.id),
  };
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
