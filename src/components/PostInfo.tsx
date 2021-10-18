import React from 'react';
import { Post } from '../types/Post';
import { CommentsList } from './CommentsList';
import { UserInfo } from './User';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <span>{post.title}</span>
    <span>{post.body}</span>
    {post.user
      ? <UserInfo user={post.user} />
      : 'No user'}
    <CommentsList comments={post.comments} />
  </>
);
