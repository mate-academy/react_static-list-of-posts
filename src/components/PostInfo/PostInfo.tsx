import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li key={post.id}>
    <p>{post.title}</p>
    <UserInfo user={post.user} />
    <p>{post.body}</p>
    <CommentList postComments={post.comments} />
  </li>
);
