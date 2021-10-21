import React from 'react';
import { Post } from './types/Post';
import { Comment } from './types/Comment';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.id) || null,
  comments: comments.filter(comment => comment.postId === post.id) as Comment[],
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList content={preparedPosts} />
  </div>
);

export default App;
