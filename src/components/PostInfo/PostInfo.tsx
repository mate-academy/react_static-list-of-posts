import React from 'react';
import './PostInfo.scss';

import { PreparedPost } from '../../types';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info" className="p-4">
    <div className="
        post-text
        border
        border-dark
        bg-dark
        bg-gradient
        p-3
        rounded-4
        shadow
        "
    >
      <div className="fs-2">{post.title}</div>
      {post.user && <UserInfo user={post.user} />}
      <div className="w-50 fs-5">{post.body}</div>
    </div>

    {post.comments && <CommentList comments={post.comments} />}
  </div>
);
