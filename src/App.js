import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './api/PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
  user: users.find(user => user.id === post.userId),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <div className="posts">
      <PostList posts={preparedPosts} />
    </div>

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
