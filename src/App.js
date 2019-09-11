import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import User from './components/User/User';
import Comment from './components/Comment/Comment';
import Post from './components/Post/Post';
import Postlist from './components/PostList/PostList';
import CommentList from './components/CommentList/CommentList';

const App = () => (
  <div className="App">
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
    <TestComponents />
  </div>
);

function TestComponents() {
  return (
    <div>
      <hr />
      user
      <User user={users[0]} />
      <hr />
      comment
      <Comment comment={comments[0]} />
      <hr />
      post
      <Post post={posts[0]} />
      <hr />
      posts
      <Postlist posts={posts} />
      <hr />
      comments
      <CommentList comments={comments} />
      <hr />
    </div>
  );
}

export default App;
