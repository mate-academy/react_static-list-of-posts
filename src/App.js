import React from 'react';

import './App.css';

import apiPosts from './api/ApiPosts';
import apiComments from './api/ApiComments';
import apiUsers from './api/ApiUsers';
import PostList from './Components/PostList/PostList';
import Header from './Components/Header/Header';

const addingUsers = (postList, usersList) => postList.map(post => (
  {
    ...post,
    user: usersList.find(user => (
      user.id === post.userId
    )),
  }
));

const postsWithUsers = addingUsers(apiPosts, apiUsers);

const App = () => (
  <>
    <Header
      posts={apiPosts}
      users={apiUsers}
      comments={apiComments}
    />
    <PostList posts={postsWithUsers} commentList={apiComments} />
  </>
);

export default App;
