import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(({ id }) => id === post.userId),
    comments: comments.filter(({ postId }) => postId === post.id),
  }
));

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <h1>Static list of posts</h1>
        <PostList posts={preparedPosts} />
      </div>
    </div>
  </div>
);

export default App;
