import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const postListWithUsers = [...posts].map(
  post => Object.assign(
    post, { user: users.filter(u => u.id === post.userId)[0] },
  ),
);
const preparedPostList = [...postListWithUsers].map(
  post => Object.assign(
    post, { commentList: comments.filter(c => c.postId === post.id) },
  ),
);

const App = () => (
  <div className="App">
    <PostList postList={preparedPostList} />
  </div>
);

export default App;
