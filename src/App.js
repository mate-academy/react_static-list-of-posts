import React from 'react';

import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => {
  const postListComplicate = posts.map(post => ({
    ...post,
    postComments: comments.filter(comment => comment.postId === post.id),
    author: users.find(user => user.id === post.userId),
  }));

  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList postList={postListComplicate} />
    </div>
  );
};

export default App;
