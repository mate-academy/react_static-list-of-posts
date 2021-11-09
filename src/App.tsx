import React from 'react';

import './App.scss';
import './components/PostInfo/PostInfo.scss';
import './components/CommentInfo/CommentInfo.scss';
import './components/CommentList/CommentList.scss';
import './components/UserInfo/UserInfo.scss';

import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = [...posts].map(post => {
  const foundUser = users.find(user => user.id === post.userId) || null;
  const preparedComments = comments.filter(comment => comment.postId === post.id) || null;

  return { user: foundUser, preparedComments, ...post };
});

const App: React.FC = () => (
  <div className="App">
    <div className="container">
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
