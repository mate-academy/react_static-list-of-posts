import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

const modifyedPosts = posts.map((post) => {
  const currentuser = users.find(user => user.id === post.userId);
  const userComment = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    name: currentuser.name,
    email: currentuser.email,
    address: currentuser.address,
    comments: userComment,
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={modifyedPosts} />
  </div>
);

export default App;
