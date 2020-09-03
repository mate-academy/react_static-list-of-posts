import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const preperedPosts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId),
  commentInPost: commentsFromServer.filter(comment => (
    comment.postId === post.id
  )),
}));

const App = () => (
  <>
    <div className="App">
      <h1>Static list of posts</h1>

      <div>
        <span>posts: </span>
        {postsFromServer.length}
      </div>

      <div>
        <span>comments: </span>
        {commentsFromServer.length}
      </div>

      <div>
        <span>Users: </span>
        {usersFromServer.length}
      </div>
    </div>
    <div className="container">
      <PostList preperedPosts={preperedPosts} />
    </div>
  </>
);

export default App;
