import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(singlepost => ({
  ...singlepost,
  user: (users.find(user => user.id === singlepost.userId) || null),
  comments: (comments.filter(comment => comment.postId === singlepost.id)),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
