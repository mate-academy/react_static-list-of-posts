import React from 'react';

import PostList from './components/PostList/PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const getPostUsers = (postList, usersList) => postList.map(post => (
  {
    ...post,
    user: usersList.find(user => (user.id === post.userId)),
  }
));

const usersPosts = getPostUsers(posts, users);

const App = () => (
  <>
    <h1 className="static-list__title">Static List of Posts</h1>
    <div className="container">
      <PostList posts={usersPosts} commentList={comments} />
    </div>
  </>
);

export default App;
