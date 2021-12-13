import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './Components/PostList/PostList';

const readyPost = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.id),
    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={readyPost} />
  </div>
);

export default App;
