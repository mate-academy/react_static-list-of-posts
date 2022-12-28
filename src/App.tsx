import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PreparedPost } from './types/prepearedPost';
import { PostList } from './components/PostList';

const PreparedPosts: PreparedPost[] = postsFromServer.map(post => {
  const getUserById
    = usersFromServer.find(userById => userById.id === post.userId);
  const getCommentsById
    = commentsFromServer.filter(commentsById => commentsById.postId
      === post.id);

  const user = getUserById;
  const comments = getCommentsById;

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
