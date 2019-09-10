import React from 'react';

import './App.css';

import ApiPosts from './api/ApiPosts';
import ApiComments from './api/ApiComments';
import ApiUsers from './api/ApiUsers';
import PostList from './Components/PostList/PostList';
import Header from './Components/Header/Header';

const addUsers = (postList, usersList) => postList.map(post => (
  {
    ...post,
    user: usersList.find(user => (
      user.id === post.userId
    )),
  }
));

const postsWithUsers = addUsers(ApiPosts, ApiUsers);

const App = () => (
  <>
    <Header posts={ApiPosts} users={ApiUsers} comments={ApiComments} />
    <PostList posts={postsWithUsers} commentList={ApiComments} />
  </>
);

export default App;
