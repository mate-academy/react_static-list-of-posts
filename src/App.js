import React from 'react';

import './App.css';
import PostList from "./components/PostList";

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function getFullInfo(postsList, commentsList, usersList) {
  return postsList.map(post => ({
    ...post,
    user: usersList.find(user => user.id === post.userId),
    comment: commentsList.filter(comment => comment.postId === post.id),
  }));
}

function App() {
  return (
    <div className="container">
      <PostList postsInfo={getFullInfo(posts, comments, users)} />
    </div>
  );
}

export default App;
