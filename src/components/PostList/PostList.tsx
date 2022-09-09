import React from 'react';

import { PostInfo } from '../PostInfo';

import { User } from '../../types/User';
import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';

import postsFromServer from '../../api/posts';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] | null {
  const foundComm = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return foundComm.length > 0 ? foundComm : null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const PostList: React.FC = () => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
