import React from 'react';

import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

const postsWithUsersAndComments = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <PostList posts={postsWithUsersAndComments} />
  </div>
);

export default App;
