import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/postList/postList';

const conditionPosts = posts.map(post => (
  {
    ...post,
    comments: comments.filter(comment => (comment.postId === post.id)),
    user: users.find(user => (user.id === post.userId)),
  }
));

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
    <PostList conditionPosts={conditionPosts} />
  </>
);

export default App;
