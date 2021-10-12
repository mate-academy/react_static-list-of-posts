import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => (
  <>
    <h3>
      {`Title: ${post.title}`}
    </h3>
    <p>
      {post.body}
    </p>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList comments={post.comments} />
  </>
);
