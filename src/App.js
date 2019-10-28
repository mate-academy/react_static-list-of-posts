import React from 'react';

import './App.css';

import PostList from './components/PostList';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function getPostsWithUsersAndComments(postsList, usersList, comentList) {
  return postsList.map(post => ({
    ...post,
    user: usersList.find(user => post.userId === user.id),
    comments: comentList.filter(comment => comment.postId === post.id),
  }));
}

const prepaedPosts = getPostsWithUsersAndComments(posts, users, comments);

const App = () => (
  <div className="App">
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
    <PostList posts={prepaedPosts} />
  </div>
);

export default App;
