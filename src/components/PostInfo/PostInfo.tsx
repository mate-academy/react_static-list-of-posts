import React from 'react';
import './PostInfo.scss';
import { ExtendedPost } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: ExtendedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info" className="post-info">
    <h2 data-cy="post title" className="post-title">{post.title}</h2>
    <p data-cy="post body" className="post-body">{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    <CommentList comment={post.comments} />
  </div>
);
