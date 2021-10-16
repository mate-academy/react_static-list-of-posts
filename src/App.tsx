import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostInfo } from './components/PostInfo/PostInfo';
import 'normalize.css';
import './App.scss';

const preparedPosts = (
  posts.map(post => (
    {
      ...post,
      user: users.find(user => user.id === post.userId),
      comment: comments.filter(comment => comment.postId === post.id),
    }))
);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostInfo posts={preparedPosts} />
  </div>
);

export default App;
