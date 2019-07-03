import React from 'react';

import './App.css';
import comments from './api/comments';
import users from './api/users';
import posts from './api/posts';
import NewPost from './components/NewPost';

const prePost = posts.map(post => ({
  post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <main className="main">
    <NewPost postsList={prePost} />
  </main>
);

export default App;
