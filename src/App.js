import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

function getPostsWithUsersAndComment() {
  return posts.map(item => ({
    ...item,
    user: users.find(elem => item.userId === elem.id),
    commentsArray: comments.filter(elem => elem.postId === item.id),
  }));
}

const postsWithUsersAndComment = getPostsWithUsersAndComment();

const App = () => (
  <div className="App">
    <div>
      <h1>Static list of posts</h1>

      <p>
        <span>posts: </span>
        {posts.length}
      </p>

      <p>
        <span>comments: </span>
        {comments.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
    <PostList posts={postsWithUsersAndComment} />
  </div>
);

export default App;
