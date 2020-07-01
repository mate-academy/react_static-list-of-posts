import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

const postInfo = posts.map((post) => {
  const currentUser = users.find(user => user.id === post.userId);
  const userComment = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    name: currentUser.name,
    email: currentUser.email,
    address: currentUser.address,
    comments: userComment,
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
    <PostList posts={postInfo} />
  </div>
);

export default App;
