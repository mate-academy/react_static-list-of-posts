import React from 'react';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

function getData(postList, userList, commentList) {
  return postList.map(post => ({
    ...post,
    user: userList.find(user => user.id === post.userId),
    comments: commentList.filter(comment => comment.postId === post.id),
  }));
}

const App = () => (
  <PostList posts={getData(posts, users, comments)}/>
);

export default App;
