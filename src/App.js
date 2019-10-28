import React from 'react';

import './App.css';
import PostList from './components/postList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function gettingFullInfo(postsList, commentsList, usersList) {
  return postsList.map(post => ({
    ...post,
    user: usersList.find(user => user.id === post.userId),
    comment: commentsList.filter(comment => comment.postId === post.id),
  }));
}


const App = () => (
  <>
    <PostList postInfo = {gettingFullInfo(posts, comments, users)}/>
  </>
);

export default App;
