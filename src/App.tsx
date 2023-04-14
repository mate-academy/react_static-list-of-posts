import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId) || null,
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
