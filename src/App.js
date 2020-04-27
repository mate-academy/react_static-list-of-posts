import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const preparedPosts = posts.map((post) => {
  const user = users
    .find(currentUser => currentUser.id === post.userId);
  const userComments = comments
    .filter(comment => (comment.postId === post.id));

  return {
    ...post,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
    },
    userComments,
  };
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

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
