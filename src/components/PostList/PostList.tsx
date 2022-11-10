import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import postsFromServer from '../../api/posts';
import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';
import { Comment } from '../../types/comment';

function getUser(userId: number): User | null {
  const relatedUser = usersFromServer.find(user => user.id === userId);

  return relatedUser || null;
}

function getComments(postId: number): Comment[] {
  const relatedComment = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return relatedComment;
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
