import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => (
  Object.assign(
    {},
    post,
    { user: users.find(user => user.id === post.userId) },
    { commentList: comments.filter(comment => comment.postId === post.id) },
  )
));

const App = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
