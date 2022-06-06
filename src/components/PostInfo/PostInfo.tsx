import React from 'react';
import { PreparedPost } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info">
    <h2 data-cy="post-title">{post.title}</h2>
    <p data-cy="post-body">{post.body}</p>
    {post.user && (<UserInfo user={post.user} />)}
    {post.comments && (<CommentList comments={post.comments} />)}
  </div>
);
