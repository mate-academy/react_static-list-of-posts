import React from 'react';

import './App.scss';

import posts from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PreparedPost } from './types/PreparedPost';
import { PostList } from './components/PostList';

const preparedPosts: PreparedPost[] = posts.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId) || null;
  const comments = commentsFromServer.filter(c => c.postId === post.userId);

  return { ...post, user, comments };
});

const App: React.FC = () => (

  <div className="section">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
