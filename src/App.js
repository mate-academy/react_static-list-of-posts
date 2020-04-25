import React from 'react';
import { PostList } from './components/Posts/PostList';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const newPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

// eslint-disable-next-line no-console
console.log(newPosts);

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
    <PostList posts={newPosts} />
  </div>
);

export default App;
