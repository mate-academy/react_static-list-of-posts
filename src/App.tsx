import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';
import { Post } from './components/types/Post';

const preparedPosts: Post[] = posts.map(post => Object.assign(post,
  { user: users.find(user => user.id === post.id) || null },
  { comments: comments.filter(comment => comment.postId === post.id) }));

const App: React.FC = () => (
  <div className="App">
    <PostList poosts={preparedPosts} />
  </div>
);

export default App;
