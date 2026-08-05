import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { PostList } from './components/PostList';
import { Post } from './types/types';

const preparedPosts: Post[] = postsFromServer.map(post => {
  const user = usersFromServer.find(el => el.id === post.userId);

  return {
    ...post,
    user: user!,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
