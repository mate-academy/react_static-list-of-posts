import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';

export type Props = {
  post: Post;
};

export const UserInfo: React.FC<Props> = ({ post }) => (
  <div className="post__user user">
    <div className="user__name">
      <strong>Name: </strong>
      {post.userName[0].name}
    </div>
    <div className="user__email">
      <strong>E-mail: </strong>
      {post.userName[0].email}
    </div>
    <CommentList {...post} />
  </div>
);
