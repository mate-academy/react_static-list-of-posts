import React from 'react';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

import { PreparedPost } from './types/PreparedPost';

import { PostList } from './components/PostList/PostList';

const preparedPosts: PreparedPost[] = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id) ?? [],
  }
));

const App: React.FC = () => (
  <section className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);

export default App;
