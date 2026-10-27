import React from 'react';

import './App.scss';
import './components/CommentInfo/CommentInfo.scss';
import './components/CommentList/CommentList.scss';
import './components/PostList/PostList.scss';
import './components/UserInfo/UserInfo.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(u => u.id === post.userId),
  comments: commentsFromServer.filter(c => c.postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
