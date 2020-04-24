import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const allPostsInformation = posts.map(post => (
  {
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
    user: users.find(user => user.id === post.userId),
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList allPostsInformation={allPostsInformation} />
  </div>
);

export default App;
