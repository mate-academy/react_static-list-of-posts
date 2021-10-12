import React from 'react';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { PostsList } from './components/PostsList';
import { Post } from './types/Post';

const prepearedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <PostsList posts={prepearedPosts} />
  </div>
);

export default App;
