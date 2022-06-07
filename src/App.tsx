import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.filter(user => post.userId === user.id)[0],
    comments: comments.filter(comment => post.id === comment.postId),
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
