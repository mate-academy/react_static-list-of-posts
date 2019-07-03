import React from 'react';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

import './App.css';
import PostList from './components/PostList';

const postWithUsersAndComments = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId),
    postComments: comments.filter(comment => comment.postId === post.id),
  }
));

const App = () => (
  <div className="App">
    <PostList postAllInfo={postWithUsersAndComments} />
  </div>
);

export default App;
