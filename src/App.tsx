import React from 'react';

import './App.scss';
import { PreparedPosts } from './app.typedefs';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts: PreparedPosts[] = posts.map(post => (
  {
    ...post,
    comment: comments.filter(comment => comment.postId === post.id),
    user: users.find(user => post.userId === user.id) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
