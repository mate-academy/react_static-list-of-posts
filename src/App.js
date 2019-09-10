import React from 'react';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList/PostList';

const getPostsWithUserAndComments = (
  postList,
  userList,
  commentList
) => postList.map(post => ({
  ...post,
  user: userList.find(user => user.id === post.userId),
  comments: commentList.filter(comment => comment.postId === post.id),
}));

const preparedPosts = getPostsWithUserAndComments(posts, users, comments);

const App = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
