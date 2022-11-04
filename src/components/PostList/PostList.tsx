import React from 'react';

import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';

import { PostInfo } from '../PostInfo';

import postsFromServer from '../../api/posts';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(postId: number): Comment[] {
  return commentsFromServer
    .filter(post => post.postId === postId);
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const PostList: React.FC = () => (
  <li className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </li>
);
