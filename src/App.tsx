import React from 'react';

import './App.scss';

import posts from './api/posts';
import commentsList from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const preparedPosts = posts.map(post => {
  const user = users.find(findingUser => findingUser.id === post.userId);
  const comments = commentsList.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user,
    comments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
