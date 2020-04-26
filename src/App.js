import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/Postlist';

const postsWithUsers = posts.map(post => (
  {
    ...post,
    user: users.find(user => (post.userId === user.id)),
  }
));
const data = postsWithUsers.map(post => (
  {
    ...post,
    comments: comments.filter(comment => (post.id === comment.postId)),
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

    <PostList data={data} />
  </div>
);

export default App;
