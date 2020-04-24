import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostTitle from './components/PostTitle';
import PostBody from './components/PostBody';
import Comments from './components/comments';
import User from './components/User';

const generatedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comment: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  generatedPosts.map(item => (
    <div className="post" key={item.id}>
      <PostTitle post={item} />
      <PostBody post={item} />
      <User info={item} />
      <Comments item={item} />
    </div>
  ))
);

export default App;
