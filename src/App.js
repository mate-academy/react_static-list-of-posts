import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const completedPostsInfo = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => post.id === comment.postId),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <section className="info">
      <p className="info__posts">
        <span className="info__title">posts: </span>
        <span className="info__value">{posts.length}</span>
      </p>

      <p className="info__comments">
        <span className="info__title">comments: </span>
        <span className="info__value">{comments.length}</span>
      </p>

      <p className="info__users">
        <span className="info__title">Users: </span>
        <span className="info__value">{users.length}</span>
      </p>
    </section>

    <PostList posts={completedPostsInfo} />
  </div>
);

export default App;
