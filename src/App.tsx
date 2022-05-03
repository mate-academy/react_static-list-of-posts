import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostsData } from './Types';
import PostList from './components/PostList/PostList';

const preparedPosts: PostsData[] = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.userId) || [],
  usersInfo: users.find(user => user.id === post.userId) || null,
}));
const App: React.FC = () => (
  <div className="App">
    <h1 className="center">Static list of posts</h1>
    <PostList postData={preparedPosts} />
  </div>
);

export default App;
