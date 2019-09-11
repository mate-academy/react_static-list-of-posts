/* eslint-disable arrow-body-style */
import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
// import User from './components/User/User';
// import Comment from './components/Comment/Comment';
// import Post from './components/Post/Post';
// import Postlist from './components/PostList/PostList';
// import CommentList from './components/CommentList/CommentList';
// import getPostsWithUsers from './getPostsWithUsers';
// import getPostWithComments from './getPostWithComments';

const App = () => {
  // const postsWithUsers = getPostsWithUsers(posts, users);
  // const postList = getPostWithComments(postsWithUsers, comments);

  return (
    <div className="App">
      <Header />
    </div>
  );
};

function Header() {
  return (
    <div className="header">
      <h1>Static list of posts</h1>
      <p>
        <span>posts: </span>
        {posts.length}
      </p>
      <p>
        <span>comments: </span>
        {comments.length}
      </p>
      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
