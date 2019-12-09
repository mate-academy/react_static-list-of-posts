import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './Components/PostList/PostList';

const getCommentPostUsers = (commentsList, postsList, user) => postsList
  .map(post => (
    {
      ...post,
      comments: commentsList.filter(comment => comment.postId === post.id),
      user: user.find(singleUser => singleUser.id === post.userId),
    }));

const newList = getCommentPostUsers(comments, posts, users);

const App = () => (
  <div className="App">
    <PostList list={newList} />
  </div>
);

export default App;
