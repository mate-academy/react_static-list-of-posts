import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import Postlist from './PostList/PostList';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <Postlist posts={preparedPosts} />
  </div>
);

const usersMap = users.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

const getPosts = (postsArr, commentsArr, usersArr) => (
  postsArr
    .map(post => ({
      ...post,
      comments: commentsArr.filter(comment => comment.postId === post.id),
      user: usersMap[post.userId],
    }))
);

const preparedPosts = getPosts(posts, comments, users);

export default App;
