import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postList = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => post.id === comment.postId),
}));

const App = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>

    <div className="App__statistic">

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
    <PostList postList={postList} />
  </div>

);

export default App;
