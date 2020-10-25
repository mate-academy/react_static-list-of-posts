import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/postlist';

const preperedPosts = (
  posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }))
);

const App = () => (
  <div className="app">
    <h1 className="app__title">
      Static list of posts
    </h1>

    <div className="app__info">
      <div className="app__text">
        <b>posts: </b>
        <span>{posts.length}</span>
      </div>

      <div className="app__text">
        <b>comments: </b>
        <span>{comments.length}</span>
      </div>

      <div className="app__text">
        <b>users: </b>
        <span>{users.length}</span>
      </div>
    </div>

    <PostList posts={preperedPosts} />
  </div>
);

export default App;
