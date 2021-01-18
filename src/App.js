import React from 'react';
import { PostList } from './Components/PostList/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const Posts = posts
  .map(post => ({
    ...post,
    user: users.find(person => person.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={Posts} />
  </div>
);

export default App;
