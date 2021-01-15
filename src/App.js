import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="page-heading">Static list of posts</h1>

    <p className="page-paragraph">
      <span>posts: </span>
      {posts.length}
    </p>

    <p className="page-paragraph">
      <span>comments: </span>
      {comments.length}
    </p>

    <p className="page-paragraph">
      <span>Users: </span>
      {users.length}
    </p>

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
