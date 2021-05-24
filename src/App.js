import React from 'react';
import PostList from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import './App.scss';

const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => post.userId === user.id),
    comment: comments.filter(comment => post.id === comment.postId),
  }
));

const App = () => (
  <>
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
    </div>

    <div className="App">
      <PostList posts={preparedPosts} />
    </div>
  </>
);

export default App;
