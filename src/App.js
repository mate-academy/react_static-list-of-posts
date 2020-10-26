import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostsList } from './components/postList';

const preparedPostsData = posts.map(post => (
  {
    ...post,
    user: users.find(user => (post.userId === user.id)),
    comments: comments.filter(comment => (comment.postId === post.id)),
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostsList posts={preparedPostsData} />
  </div>
);

export default App;
