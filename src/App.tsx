import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';

const preparedPosts: Post[] = postsFromServer.map(post => {
  const comment = commentsFromServer.filter(com => post.id === com.postId);
  const user = usersFromServer.filter(person => person.id === post.userId);

  return {
    ...post,
    comment,
    user,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
