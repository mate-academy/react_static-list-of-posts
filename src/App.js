import React from 'react';

import './App.css';
import PostList from './PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function getPostsWithDependencies(postList, commentList, userList) {
  return postList.map(post => (
    {
      ...post,
      comments: commentList.filter(comment => comment.postId === post.id),
      user: userList.find(user => user.id === post.userId),
    }
  ));
}

const App = () => {
  const preparedPosts = getPostsWithDependencies(posts, comments, users);

  return (
    <PostList posts={preparedPosts} />
  );
};

export default App;
