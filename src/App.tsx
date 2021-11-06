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
  const user = [...users].find(userkk => userkk.id === post.userId) || null;
  const prepComments = [...comments].filter(comment => comment.postId === post.id) || null;

  return { user, prepComments, ...post };
});

const App: React.FC = () => (
  <div className="App">
    <div className="container">
      <PostList prepPosts={preparedPosts} />
    </div>
  </div>
);

export default App;
