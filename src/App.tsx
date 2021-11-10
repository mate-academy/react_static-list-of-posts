import React from 'react';
import PostList from './components/PostList/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(element => ({
  ...element,
  user: users.find(user => user.id === element.userId) || null,
  comment: comments.filter(comment => comment.postId === element.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);





export default App;
