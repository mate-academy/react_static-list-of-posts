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
    <div className="app">
      <h1>Static list of posts</h1>
      <div className="app__statistic">
        <p>
          <span className="app__statistic--item">posts: </span>
          {postsFromServer.length}
        </p>

        <p>
          <span className="app__statistic--item">comments: </span>
          {commentsFromServer.length}
        </p>

        <p>
          <span className="app__statistic--item">Users: </span>
          {usersFromServer.length}
        </p>
      </div>

    </div>
    <PostList posts={posts} />
  </>
);

export default App;
