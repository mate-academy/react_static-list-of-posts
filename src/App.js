import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/postlist/PostList';

function getPostsWithUsers() {

  return [...posts].map(post => {
    post.user = users.find(user => post.userId === user.id);
    post.comments = comments.filter(currentComments => currentComments.postId === post.id);
    return post;
  });
}

const App = () => {
 return (
  <PostList posts={getPostsWithUsers()} />
 )
};


export default App;
