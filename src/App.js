import React from 'react';

import './App.scss';
import './components/PostList/PostList.scss';
import './components/Post/Post.scss';
import './components/User/User.scss';
import './components/CommentList/CommentList.scss';
import './components/Comment/Comment.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const collectedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="app">
    <h1 className="app__title">&lt; Static list of posts ptn pnx&gt;</h1>

    <p className="app__text">
      <span>posts: </span>
      {posts.length}
    </p>

    <p className="app__text">
      <span>comments: </span>
      {comments.length}
    </p>

    <p className="app__text">
      <span>Users: </span>
      {users.length}
    </p>

    <PostList posts={collectedPosts} />

  </div>
);

export default App;
