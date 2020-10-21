import React from 'react';
import { Post } from './components/Post';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  postComments: comments.filter(comment => post.id === comment.postId),
}));

const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>

    {
      postsList.map((post, index) => (
        <Post
          key={post.id}
          row={Math.trunc(index / 3) + 1}
          {...post}
        />
      ))
    }
  </div>
);

export default App;
