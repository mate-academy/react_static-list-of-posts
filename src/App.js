import React from 'react';
// import PropTypes from 'prop-types';
// import { CommentList } from './components/CommentList';
// import { User } from './components/User/User';
// import { Post } from './components/Post';
import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const updatedPosts = posts.map(
  post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }),
);

const App = () => (
  <div className="App">
    <PostList posts={updatedPosts} />
  </div>
);

export default App;
