import React from 'react';
import { PreparedPost } from '../types/PreparedPost';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => post.user && (
  <div className="posts__item">
    <div className="posts__item-title">{post.title}</div>
    <div className="posts__item-body">{post.body}</div>
    <UserInfo name={post.user.name} email={post.user.email} />
    <CommentList comments={post.comments} />
  </div>
);
