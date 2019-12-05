import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

const getPost = (postsArr, usersArr, commentArr) => (
  postsArr.map((post) => {
    const user = usersArr.find(person => person.id === post.userId);
    const comment = commentArr
      .filter(commentElem => commentElem.postId === post.id);

    return { ...post, comment, user };
  })
);
const preparedPost = getPost(posts, users, comments);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPost} />
  </div>
);

export default App;
