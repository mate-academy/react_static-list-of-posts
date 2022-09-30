import React from 'react';
import { Post } from './types/Post';

import './App.scss';

import commentsFromServer from './api/comments';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const completedPost: Post[] = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => (post.userId === user.id)) || null,
  comments: commentsFromServer.filter(comment => (post.id === comment.postId)),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={completedPost} />
  </section>
);
