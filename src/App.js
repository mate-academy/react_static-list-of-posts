import React from 'react';
import { PostList } from './components/PostList/PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { postsWithExtraInfo } from './api/postsWithExtraInfo';

const App = () => (
  <>
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
    </div>

    <PostList posts={postsWithExtraInfo} />
  </>
);

export default App;
