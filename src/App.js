import React from 'react';
import PostList from './components/PostList/PostList';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const usersMap = users
  .reduce((acum, user) => ({ ...acum, [user.id]: user }), {});

function getFullPosts(allPosts, commentsArr) {
  return allPosts.map(post => ({
    ...post,
    comments: commentsArr.filter(comment => comment.postId === post.id),
    user: usersMap[post.userId],
  }));
}

const postsWithFullInfo = getFullPosts(posts, comments);
const App = () => (
  <div className="App">
    <h1 className="app__title">Static list of posts</h1>
    <PostList fullPosts={postsWithFullInfo} />
  </div>
);

export default App;
