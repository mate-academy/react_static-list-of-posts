import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { PreparePost } from './types/PreparePost';

const posts: PreparePost[] = postsFromServer.map(post => {
  const userPost = usersFromServer.find(user => user.id === post.userId);
  const postComments = commentsFromServer.filter(comment => (
    comment.postId === post.id
  ));

  return {
    ...post,
    user: userPost,
    comments: postComments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={posts}
    />

  </section>
);
