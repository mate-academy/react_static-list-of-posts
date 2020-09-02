import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const preparedPost = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <>
    <div className="App">
      <h1>Static list of posts</h1>

      <p>
        <span>posts: </span>
        {postsFromServer.length}
      </p>

      <p>
        <span>comments: </span>
        {commentsFromServer.length}
      </p>

      <p>
        <span>Users: </span>
        {usersFromServer.length}
      </p>
    </div>
    <PostList posts={preparedPost} />
  </>

);

export default App;
