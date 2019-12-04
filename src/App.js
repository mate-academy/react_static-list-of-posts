import React from 'react';
import PostList from './PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => {
  const postsWithComments = (
    postsList, commentsList, usersList
  ) => postsList.map(
    post => ({
      ...post,
      comments: commentsList.filter(comment => comment.postId === post.id),
      user: usersList.find(user => user.id === post.userId),
    })
  );

  return (
    <div className="post">
      <h1 className="title">Static list of posts</h1>
      <PostList posts={postsWithComments(posts, comments, users)} />
    </div>
  );
};

export default App;
