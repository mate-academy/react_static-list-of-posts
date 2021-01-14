import React from 'react';
import './App.scss';

import { PostList } from './postList/Postlist';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const mails = posts.map(post => ({
  ...post,
  users: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.userId),
}));

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

    <>
      <PostList mails={mails} />
    </>

  </div>
);

export default App;
