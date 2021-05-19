import React from 'react';
import PostList from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const usersList = users
  .reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

const getFullPosts = (postsAll, commentsAll) => postsAll.map(post => ({
  ...post,
  comments: commentsAll.filter(comment => comment.postId === post.id),
  user: usersList[post.userId],
}));

const FullInfo = getFullPosts(posts, comments);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList fullPosts={FullInfo} />
  </div>
);

export default App;
