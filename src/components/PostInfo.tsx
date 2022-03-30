import React from 'react';
import { PreparedPost } from '../types';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
import './PostInfo.scss';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="PostInfo">
      <UserInfo user={post.user} />
      <p className="PostInfo__title">{post.title}</p>
      <p className="PostInfo__body">{post.body}</p>
      <CommentList comments={post.comments} />
    </div>
  );
};
