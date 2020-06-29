import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

function getPostsUsersComments(postsList, commentsList, usersList) {
  return postsList.map(post => ({
    ...post,
    user: usersList.find(el => el.id === post.userId),
    comments: commentsList.filter(comment => comment.postId === post.id),
  }));
}

const postsWithUsersAndComments = getPostsUsersComments(posts, comments, users);

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
    <PostList post={postsWithUsersAndComments} />
  </div>
);

export default App;
