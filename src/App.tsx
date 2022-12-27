import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PreparedPost } from './types/prepearedPost';
import { PostList } from './components/PostList';

const PreparedPosts: PreparedPost[] = postsFromServer.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId);
  const comments = commentsFromServer.filter(com => com.postId === post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={PreparedPosts} />
    </section>
  );
};
