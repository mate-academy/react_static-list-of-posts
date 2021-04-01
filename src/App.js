import React from 'react';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

import './app.scss';

const postList = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comment: comments.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <div className="app">
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

    <PostList posts={postList} />
  </div>
);
