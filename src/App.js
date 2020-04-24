import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const preparedPosts = posts.map((post) => {
  const user = users.find(curUser => curUser.id === post.userId);
  // eslint-disable-next-line max-len
  const userComments = comments.filter(curComent => (curComent.postId === post.id));

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
    <div className="container">
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
