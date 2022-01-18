import React from 'react';
import users from './api/users';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import { PostList } from './components/PostList';
import { PrepearedPosts } from './types/types';

const preparedPosts: PrepearedPosts[] = posts.map(post => ({
  ...post,
  user: users.find(person => person.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <>
    <h1 className="card-title text-center">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </>
);

export default App;
