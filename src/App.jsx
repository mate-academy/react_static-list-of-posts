import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';
import './App.scss';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>

    <div className="app__info">
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
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
