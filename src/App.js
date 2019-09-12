import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

const PostsWhithUser = posts.map(post => (
  {
    ...post,
    user: users.find(person => person.id === post.userId),
    comments: comments.filter(comment => post.id === comment.postId),
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={PostsWhithUser} />
  </div>
);

export default App;
