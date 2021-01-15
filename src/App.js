import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comm => post.id === comm.postId),
}));

const App = () => (
  <>
    <div className="App">
      <h1>Static list of posts</h1>

      <p className="App__title">
        <span>Posts: </span>
        {posts.length}
      </p>

      <p className="App__commentsSum">
        <span>Comments: </span>
        {comments.length}
      </p>

      <p className="App__usersSum">
        <span>Users: </span>
        {users.length}
      </p>

      <PostList posts={preparedPosts} />
    </div>
  </>
);

export default App;
