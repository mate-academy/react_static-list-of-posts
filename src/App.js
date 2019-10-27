import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/postlist/PostList';

function getPostsWithUsers(posts, comments, users) {
  for (let i = 0; i < posts.length; i++) {
    posts[i].user = users.find(user => posts[i].userId === user.id);
    posts[i].comments = [];
    comments.forEach(comment => {
      if (comment.postId === posts[i].id) {
        const comentData = {};
        comentData.name = comment.name;
        comentData.body = comment.body;
        posts[i].comments.push(comentData);
      }
    })
  }

  return posts;
}

const App = () => {
 return (
  <PostList posts={getPostsWithUsers(posts, comments, users)} />
 )
};


export default App;
