import React from 'react';

import './App.css';
import PostList from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preaparedPosts = posts.map((post) => {
  const userInf = users.find(user => user.id === post.userId);

  return {
    ...post,
    user: {
      name: userInf.name,
      email: userInf.email,
      street: userInf.address.street,
      suite: userInf.address.suite,
      city: userInf.address.city,
      zipcode: userInf.address.zipcode,
    },

    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preaparedPosts} />
  </div>
);

export default App;
