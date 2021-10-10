import React from 'react';

import './App.scss';

import Posts from './api/posts';
import Comments from './api/comments';
import Users from './api/users';
import { Post } from './types/Post';
import { PostList } from './components/PostList/PostList';

const preparedPosts: Post[] = Posts.map(post => ({
  ...post,
  user: Users.find(({ id }) => post.userId === id) || null,
  comments: Comments.filter(({ postId }) => postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
