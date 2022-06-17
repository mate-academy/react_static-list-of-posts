import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { Post } from '../../react-app-env';
import './PostInfo.scss';

interface Props {
  post: Post,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="postInfo" data-cy="post-info">
    <h2 className="post__title" data-cy="post-title">{post.title}</h2>
    <p className="post__body" data-cy="post-body">{post.body}</p>
    <UserInfo user={post.user} />
    <CommentList comment={post.comment} />
  </div>
);
