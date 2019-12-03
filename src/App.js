import React from 'react';
import PostList from './PostList';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const getPreparedPosts = (postsArr, usersArr, commentsArr) => (
  postsArr.map((post) => {
    const user = usersArr.find(person => person.id === post.userId);
    const commentList = commentsArr
      .filter(comment => comment.postId === post.id);

    return { ...post, user, commentList };
  })
);

const preparedPosts = getPreparedPosts(posts, users, comments);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
