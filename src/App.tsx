import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { type Post } from './types/Post';
import { type User } from './types/User';
import { Comment } from './types/Comment';

const getCommentsByPostId = (postId: Post['id']): Comment[] => {
  return commentsFromServer.filter(
    (comment: Comment) => comment.postId === postId,
  );
};

const getUserById = (userId: User['id']): User | undefined => {
  return usersFromServer.find((user: User) => user.id === userId);
};

const posts: Post[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsByPostId(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      <div className="PostList">
        <PostList posts={posts} />
      </div>
    </div>
  </section>
);
