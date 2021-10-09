import React from 'react';
import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <p>{post.title}</p>
    <p>{post.body}</p>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </>
);
