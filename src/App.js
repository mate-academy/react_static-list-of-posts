import React from 'react';

import './App.css';

import postsFromServer from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './PostList/PostList';

const posts = postsFromServer.map(post => {
  const currentPost = { ...post };

  currentPost.comments = comments.filter(comment => comment.postId === currentPost.id);
  currentPost.user = users.find(user => user.id === currentPost.userId);

  return currentPost;
});

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
    <PostList posts={posts} />
  </div>
);

export default App;
