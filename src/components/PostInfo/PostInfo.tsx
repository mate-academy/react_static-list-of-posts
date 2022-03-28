import React from 'react';

import { PreparedPost } from '../../types/types';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <UserInfo user={post.user} />
      <p data-cy="post-title">
        {post.title}
      </p>
      <p data-cy="post-body">
        {post.body}
      </p>
      <CommentList comments={post.comments} />
    </div>
  );
};
