import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { Post } from './types/Post';
import { PostList } from './components/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(person => person.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
