import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const getComments = id => comments.filter(comment => comment.postId === id);
const getUser = id => users.find(user => user.id === id);

const App = () => {
  const preparedPosts = posts.map(post => ({
    ...post,
    commentsByPost: getComments(post.id),
    userByPost: getUser(post.userId),
  }));

  return (
    <div className="app">
      <h1 className="h1">Static list of posts</h1>
      <PostList list={preparedPosts} />
    </div>
  );
};

export default App;
