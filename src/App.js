import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

function groupPostsWithUsersAndComments(postList, commentList, userList) {
  return postList.map(post => (
    {
      ...post,
      user: userList.find(user => user.id === post.userId),
      comments: commentList.filter(comment => comment.postId === post.id),
    }
  ));
}

const preparedPosts = groupPostsWithUsersAndComments(posts, comments, users);

const App = () => (
  <div className="App">
    <div className="header">
      <h1>Static list of posts</h1>
      <div className="header-items">
        <div className="header__item">
          <span>Posts: </span>
          {posts.length}
        </div>
        <div className="header__item">
          <span>Comments: </span>
          {comments.length}
        </div>
        <div className="header__item">
          <span>Users: </span>
          {users.length}
        </div>
      </div>
    </div>
    <div className="container">
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
