import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const createPreparedList = (postsList, commentsList, usersList) => (
  postsList.map(post => (
    {
      ...post,
      user: usersList.find(person => person.id === post.userId),
      comments: commentsList.filter(comment => comment.postId === post.id)
        .map(item => ({
          ...item,
          user: usersList.find(person => person.email === item.email),
        })),
    }
  ))
);

const preparedArray = createPreparedList(posts, comments, users);

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
    <PostList preparedArray={preparedArray} />
  </div>
);

export default App;
