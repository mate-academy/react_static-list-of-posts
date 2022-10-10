import React from 'react';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { PostInfo } from '../PostInfo';

import postsFromServer from '../../api/posts';
import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const PostList: React.FC = () => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
        key={post.id}
      />
    ))}
  </div>
);
