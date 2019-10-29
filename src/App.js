import React from 'react';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

function getData(postList, userList, commentList) {
  postList.forEach((post) => {
    post.user = userList.find(user => user.id === post.userId);
    post.comments = commentList.filter(comment => comment.postId === post.id);
  });

  return postList;
}

const App = () => (
  <PostList posts={getData(posts, users, comments)}/>
);

export default App;
