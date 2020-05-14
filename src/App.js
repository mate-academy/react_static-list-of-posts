import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  commentList: comments.filter(
    comment => comment.postId === post.id,
  ),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <p>
      <span>posts: </span>
      {posts.length}

      <span> comments: </span>
      {comments.length}

      <span> Users: </span>
      {users.length}
    </p>

    <PostList pList={preparedList} />
  </div>
);

export default App;
