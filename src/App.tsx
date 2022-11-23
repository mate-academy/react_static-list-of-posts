import React from 'react';

import './App.scss';

import { Post } from './types/Post';

import postsFromServer from './api/posts';
import comments from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

const preparedPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      postedList={preparedPosts}
    />
  </section>
);
