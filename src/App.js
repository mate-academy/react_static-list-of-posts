import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

const getPostsWithUsersAndComments = (allPosts, allUsers, allComents) => (
  allPosts.map((post) => {
    const user = allUsers.find(person => person.id === post.userId);
    const commentsSet = allComents
      .filter(comment => comment.postId === post.id);

    return {
      ...post,
      user,
      commentsSet,
    };
  })
);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList fullPosts={
      getPostsWithUsersAndComments(posts, users, comments)}
    />
  </div>
);

export default App;
