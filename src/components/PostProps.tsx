import React from 'react';
import { Post } from '../types/Post';
import { CommentsList } from './CommentsListProps';
import { UserInfo } from './UserProps';

type PostProps = {
  post: Post;
};

export const PostInfo: React.FC<PostProps> = ({ post }) => (
  <>
    <span>{post.title}</span>
    <span>{post.body}</span>
    {post.user
      ? <UserInfo user={post.user} />
      : 'No user'}
    <CommentsList comments={post.comments} />
  </>
);
