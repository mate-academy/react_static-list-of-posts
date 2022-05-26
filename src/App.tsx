import React from 'react';
import PostList from './components/PostList/PostList';
import './App.scss';
import postsFromFile from './api/posts';
import commentsFromFile from './api/comments';
import usersFromFile from './api/users';

const preparedPosts = postsFromFile.map(post => {
  return {
    ...post,
    author: usersFromFile.find(user => user.id === post.userId || null),
    comments: commentsFromFile.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
