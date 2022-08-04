import React from 'react';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { PostList } from './components/PostList/PostList';
import './App.scss';

const getUserbyId = (userId: number) => {
  const foundUserbyId = usersFromServer.find(user => user.id === userId);

  return foundUserbyId || null;
};

const getCommentsbyId = (id: number) => {
  const foundCommenstbyId = commentsFromServer
    .filter(comment => comment.postId === id);

  return foundCommenstbyId;
};

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserbyId(post.userId),
  comments: getCommentsbyId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
