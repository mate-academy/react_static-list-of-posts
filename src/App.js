import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/postList/PostList';

function postsWithUsersAndComment(postList, userList, commentList) {
  return postList.map(post => ({
    ...post,
    user: userList.find(user => user.id === post.userId),
    comments: commentList.filter(comment => comment.postId === post.id),
  }));
}

const fullPosts = postsWithUsersAndComment(posts, users, comments);

const App = () => (
  <div className="App">
    <PostList posts={fullPosts} />
  </div>
);

export default App;
