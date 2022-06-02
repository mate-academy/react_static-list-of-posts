import React from 'react';
import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { PreparedPost } from '../../react-app-env';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info" className="box">
    <p data-cy="post-title" className="title is-6">{post.title}</p>
    <p data-cy="post-body" className="title is-6">{post.body}</p>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList comments={post.comments} />
  </div>
);
