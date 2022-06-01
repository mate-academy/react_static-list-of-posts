import React from 'react';

import './App.scss';
import { PreparedPosts } from './app.typedefs';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts: PreparedPosts[] = comments.map(comment => (
  {
    ...comment,
    post: posts.find(post => comment.postId === post.id),
    user: posts.find(post => {
      return (users.find(user => post.userId === user.id));
    }),
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
