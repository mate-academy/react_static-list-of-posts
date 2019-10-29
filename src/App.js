import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

function getPostsWithUsersAndComments(postList, usersList, commentList) {
  return postList.map(post => ({
    ...post,
    user: usersList.find(user => user.id === post.userId),
    comments: commentList.filter(comment => comment.postId === post.id),
  }));
}

const PostsWithUsersAndComments = getPostsWithUsersAndComments(
  posts, users, comments
);

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
    <PostList posts={PostsWithUsersAndComments} />
  </div>
);

export default App;
