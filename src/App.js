import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList/PostList';

const listOfPosts = posts.map(post => ({
  ...post,
  user: users.find(({ id }) => id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="App__header">Static list of posts</h1>
    <div className="App__statistics">
      <p className="App__statistics--item">
        <span>Posts: </span>
        {posts.length}
      </p>
      <p className="App__statistics--item">
        <span>Comments: </span>
        {comments.length}
      </p>
      <p className="App__statistics--item">
        <span>Users: </span>
        {users.length}
      </p>
    </div>
    <PostList posts={listOfPosts} />
  </div>
);

export default App;
