import React from 'react';

import './style.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts = posts.map((post) => (
  {
    ...post,
    user: users
      .find(user => post.userId === user.id),
    comments: comments
      .filter(comment => comment.postId === post.id),
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__header">Static list of posts</h1>
    <PostList postsList={preparedPosts} />
  </div>
);

export default App;
