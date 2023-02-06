import React from 'react';
import './App.scss';

import { Post } from './types/Post';
import { PostList } from './components/PostList';

import { getUser } from './utils/getUser';
import { getComments } from './utils/getComments';
import postsFromServer from './api/posts';

const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    {posts && <PostList posts={posts} />}
  </section>
);
