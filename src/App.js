import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Stats } from './components/Stats';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <Stats
      posts={posts.length}
      comments={comments.length}
      users={users.length}
    />

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
