import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './Components/PostList';

const App = () => {
  const postsWithUsers = (postsList, commentsList, usersList) => postsList.map(
    post => ({
      ...post,
      user: usersList.find(user => user.id === post.userId),
      comments: commentsList.filter(comment => comment.postId === post.id),
    })
  );

  return (
    <div className="App">
      <h1>Static list of posts</h1>
      <PostList posts={postsWithUsers(posts, comments, users)} />
    </div>
  );
};

export default App;
