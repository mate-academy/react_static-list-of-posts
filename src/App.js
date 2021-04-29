import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './PostList';

const createPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => post.userId === user.id),
    comment: comments.filter(comment => comment.postId === post.id),
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
    <PostList postList={createPosts} />
  </div>
);

export default App;
