import React from 'react';

import './App.css';
import PostsList from './components/PostsList/PostsList';
import Header from './components/Header/Header';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function getPostsWithData(posts, users, comments) {
  return posts.map(post => ({
    ...post,
    user: users.find(item => item.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }
  ));
}

const preparedPosts = getPostsWithData(posts, users, comments);

const App = () => (
  <div className="App">
    <Header />
    <PostsList posts={preparedPosts} />
  </div>
);

export default App;
