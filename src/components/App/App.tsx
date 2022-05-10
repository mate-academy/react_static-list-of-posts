import React from 'react';

import './App.scss';

import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';
import { PostList } from '../PostList/PostList';

const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id) || null,
  }
));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
