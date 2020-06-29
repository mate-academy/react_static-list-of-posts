import React from 'react';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import './App.css';
import { PostList } from './PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comment: comments.filter(comment => comment.postId === post.id),
}));

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

    <section className="postList">
      <PostList preparedPosts={preparedPosts} />
    </section>

  </>
);

export default App;
