import React from 'react';

import './App.scss';
import './components/PostInfo/PostInfo.scss';
import './components/UserInfo/UserInfo.scss';
import './components/CommentList/CommentList.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { User } from './components/Types/user';
import { Post } from './components/Types/post';
import { Comment } from './components/Types/comment';

function getUserFromId(userId: number): User | null {
  const searchedUser = usersFromServer.find(user => user.id === userId);

  return searchedUser || null;
}

function getCommentFromId(postId: number): Comment[] {
  const searchedComment = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return searchedComment;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserFromId(post.userId),
  comments: getCommentFromId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
