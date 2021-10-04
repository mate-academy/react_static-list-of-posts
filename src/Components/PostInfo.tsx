import React from 'react';
import { Props, UserInfo } from './UserInfo';

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post__title">
      {post.title}
    </h2>
    <div className="post__body">
      {post.body}
    </div>
    <UserInfo post={post} />
  </>
);
