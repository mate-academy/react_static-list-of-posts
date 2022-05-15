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
    <h1>This static list of posts does not contain any css styling!</h1>
    <PostList posts={preparedPosts} data-cy="post-info" />
  </div>
);

export default App;
