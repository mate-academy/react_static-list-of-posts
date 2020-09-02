import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => post.userId === user.id),
  comments: commentsFromServer.filter(comment => post.id === comment.postId),
}));

const App = () => (
  <>
    <div className="App">
      <h1>Static list of posts</h1>
      <div className="statistic">
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

    </div>
    <ul className="postList">
      <PostList posts={posts} />
    </ul>
  </>
);

export default App;
