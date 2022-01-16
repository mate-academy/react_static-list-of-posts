import React from 'react';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PrepearedPost } from './types/PrepearedPost';
import { PostInfo } from './components/PostInfo';
import './App.scss';

const preparedPosts: PrepearedPost[] = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comments: comments.filter(comment => comment.postId === post.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostInfo posts={preparedPosts} />
  </div>
);

export default App;
