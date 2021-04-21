import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const arrayPostsUsersComments = posts.map((post) => {
  const objUser = users.find(user => user.id === post.userId);
  const objComment = comments.find(comment => comment.postId === post.id);

  return {
    ...post,
    user: objUser,
    comment: objComment,
  };
});

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
    <div>
      <PostList posts={arrayPostsUsersComments} />
    </div>
  </div>
);

export default App;
