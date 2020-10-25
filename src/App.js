import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const PreparedPostsWithComments = [...posts].map(post => ({
  ...post,
  postComments: comments.filter(({ postId }) => post.id === postId),
  user: users.find(({ id }) => post.userId === id),
}));

const App = () => (
  <div
    className="App jumbotron"
    style={{
      fontSize: 11,
      color: '#264653',
      background: '#eae2b7',
    }}
  >
    <h1 className="text-center display-3">
      Static list of posts
    </h1>

    <p className="text-center lead text-uppercase">
      <span>
        {`posts: ${posts.length} | `}
      </span>

      <span>
        {`comments: ${comments.length} | `}
      </span>

      <span>
        {`Users: ${users.length}`}
      </span>
    </p>

    <PostList posts={PreparedPostsWithComments} />
  </div>
);

export default App;
