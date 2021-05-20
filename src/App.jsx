import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPostList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  ownComments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div>
    <h1 className="title">React static list of posts</h1>
    <main className="main">
      <div className="main__content">
        <PostList allPosts={preparedPostList} />
      </div>
    </main>
  </div>
);

export default App;
