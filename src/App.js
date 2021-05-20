import React from 'react';

import { PostList } from './components/PostList';
import { CommentList } from './components/CommentList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="app">
    {preparedPosts.map(post => (
      <>
        <PostList post={post} />
        <CommentList {...post} />
      </>
    ))}
  </div>
);

export default App;
