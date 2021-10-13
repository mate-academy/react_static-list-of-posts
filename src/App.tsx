import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './api/Types/Interfaces';
import { PostList } from './Components/Postlist/PostList';

const preparedPosts: Post[] = posts.map(post => (
  {
    ...post,
    user: users.find(user => post.userId === user.id) || null,
    comments: comments.filter(comment => post.id === comment.postId),
  }));

const App: React.FC = () => (
  <PostList posts={preparedPosts} />
);

export default App;
