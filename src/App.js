import React from 'react';

import './App.scss';

import postsInput from './api/posts';
import commentsInput from './api/comments';
import usersInput from './api/users';
import { PostList } from './components/PostList/PostList';

const postsList = postsInput.map(post => ({
  ...post,
  user: usersInput.find(user => user.id === post.userId),
  comments: commentsInput.filter(comment => post.id === comment.postId),
}));

const App = () => (
  <div className="App">
    <div className="App__header">
      <h1>Static list of posts</h1>
      <p>
        <span>posts: </span>
        {postsInput.length}
      </p>

      <p>
        <span>comments: </span>
        {commentsInput.length}
      </p>

      <p>
        <span>Users: </span>
        {usersInput.length}
      </p>
    </div>
    <PostList posts={postsList} />
  </div>
);

export default App;
