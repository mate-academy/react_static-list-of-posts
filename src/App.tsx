import React from 'react';
import { PostList } from './components/PostList';
import { User } from './types/user';
import { Comment } from './types/comment';
import { TotalPost } from './types/totalpost';

import './App.scss';
import './components/CommentInfo/CommentInfo.scss';
import './components/CommentList/CommentList.scss';
import './components/PostInfo/PostInfo.scss';
import './components/PostList/PostList.scss';
import './components/UserInfo/UserInfo.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(id: number): Comment[] {
  const filterComment = commentsFromServer.filter(
    (comment) => comment.postId === id,
  );

  return filterComment;
}

const totalPosts: TotalPost[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList totalPosts={totalPosts} />
  </section>
);
