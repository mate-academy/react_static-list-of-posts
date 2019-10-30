import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './component/postList/PostList';

function getPostsWithComments(postList, userList, commentsList) {
  return postList.map(post => ({
    ...post,
    user: userList.find(item => item.id === post.userId),
    comments: commentsList.filter(comment => comment.postId === post.id),
  }));
}

function App() {
  return (
    <PostList posts={getPostsWithComments(posts, users, comments)} />
  );
}

export default App;
