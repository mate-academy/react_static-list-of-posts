import React from 'react';
import './App.scss';
import { ArrangedPost } from './types/ArrangedPost';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const posts: ArrangedPost[] = postsFromServer.map(post => (
  {
    ...post,
    user: usersFromServer.find(({ id }) => post.userId === id) || null,
    comments: commentsFromServer.filter(({ postId }) => post.id === postId),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>

    <PostList posts={posts} />
  </section>
);
