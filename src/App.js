import React from 'react';
import './App.css';
import PostsList from './components/PostsList/PostsList';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

function getPostWithProps(postsArr, usersArr, commentsArr) {
  return postsArr.map(post => ({
    ...post,
    user: usersArr.find(user => user.id === post.userId),
    comments: comments.filter(comment => post.id === comment.postId),
  }));
}

const preparedPost = getPostWithProps(posts, users, comments);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div className="wrapp">
      <PostsList posts={preparedPost} />
    </div>
  </div>
);

export default App;
