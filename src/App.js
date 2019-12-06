import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

function getPostsWithUsers() {
  return (posts.map(post => (
    {
      ...post,
      user: users.find(user => post.userId === user.id),
      comments: comments.filter(comment => comment.postId === post.id),
    }
  )));
}

const postsWithUsers = getPostsWithUsers();

// console.log(postsWithUsers);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <p>
      <PostList posts={postsWithUsers} />
    </p>
  </div>
);

export default App;
