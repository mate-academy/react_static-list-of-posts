import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const App = () => {
  const prepearedList = [...posts].map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comment: comments.filter(comment => post.id === comment.postId),
  }));

  return (
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
      <section className="Posts">
        <PostList posts={prepearedList} />
      </section>
    </div>
  );
};

export default App;
