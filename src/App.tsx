import React from 'react';
import './components/UserInfo/UserInfo.scss';
import './components/CommentList/CommentList.scss';
import './components/PostInfo/PostInfo.scss';
import './App.scss';
import postsFromServer from './api/posts';
import { Post } from './types/Post';
import { PostList } from './components/PostList';
import { findUserById, getCommentsByPostId } from './helpers/helpers';

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
