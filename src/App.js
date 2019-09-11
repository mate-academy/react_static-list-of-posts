import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

import './App.css';

const usersMap = users
  .reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

const getPostsWithComments = (postsList, commentsList) => (
  postsList
    .map(post => ({
      ...post,
      comments: commentsList.filter(comment => comment.postId === post.id),
      user: usersMap[post.userId],
    }))
);

const App = () => {
  const preparedPosts = getPostsWithComments(posts, comments, users);

  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  );
};

export default App;
