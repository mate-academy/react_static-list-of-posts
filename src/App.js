import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

function getPostsWithUsers(posts, users, comments) {
  return posts.map(post => ({
    ...post,
    user: users.find(item => item.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

const preparedPosts = getPostsWithUsers(posts, users, comments);

const App = () => (
  <div className="main">
    <h1>Static list of posts</h1>

    <p>
      <span>posts: </span>
      {posts.length}
      <br />
      <span>comments: </span>
      {comments.length}
      <br />
      <span>Users: </span>
      {users.length}
    </p>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
