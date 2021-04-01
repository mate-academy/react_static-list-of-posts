import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

export const postList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comment: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div>
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

export default App;
