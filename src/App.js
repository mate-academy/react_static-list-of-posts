import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const preparePostList = (postsArr, usersArr, commentsArr) => (
  postsArr.map(
    post => ({
      ...post,
      user: usersArr.find(
        user => post.userId === user.id
      ),
      comments: commentsArr.filter(
        comment => post.id === comment.postId
      ),
    })
  )
);

const App = () => (
  <div className="App">
    <h1 className="main-title">Static list of posts</h1>
    <PostList list={preparePostList(posts, users, comments)} />
  </div>
);

export default App;
