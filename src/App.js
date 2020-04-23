import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './Components/PostList/PostList';

const prepContent = posts.map((post) => {
  const prepPost = { ...post };
  const author = users.find(user => post.userId === user.id);
  const postComments = comments.filter(comment => post.id === comment.postId);

  prepPost.comments = postComments.map((comment) => {
    const prepComment = {
      id: comment.id,
      name: comment.name,
      email: comment.email,
      body: comment.body,
    };

    return prepComment;
  });

  prepPost.user = {
    name: author.name,
    email: author.email,
    address: {
      zipcode: author.address.zipcode,
      city: author.address.city,
      street: author.address.street,
      suite: author.address.suite,
    },
  };

  return prepPost;
});

const App = () => (
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

    <PostList posts={prepContent} />
  </div>
);

export default App;
