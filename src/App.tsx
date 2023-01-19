import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getCommentsByPostId(postId: number): Comment[] {
  const postComments = commentsFromServer.filter(comment => (
    comment.postId === postId
  ));

  return postComments;
}

const posts: Post[] = postsFromServer.map(post => {
  const postOfUser = usersFromServer.find(user => (
    user.id === post.userId
  ));

  return {
    ...post,
    comments: getCommentsByPostId(post.id),
    user: postOfUser || null,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
