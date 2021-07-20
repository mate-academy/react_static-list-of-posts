import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(
  post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }),
);

const App = () => (
  <div className="App container is-fluid">
    <div className="section is-simple">
      <h1 className="title">
        Static list of posts
      </h1>
      <p>
        <h2 className="subtitle">
          {`Total posts number: ${posts.length}`}
        </h2>
        <h2 className="subtitle">
          {`Total comments number: ${comments.length}`}
        </h2>
        <h2 className="subtitle">
          {`Total users number: ${users.length}`}
        </h2>
      </p>

    </div>

    <p className="media">
      <PostList posts={preparedPosts} className="media-content" />
    </p>
  </div>
);

export default App;
