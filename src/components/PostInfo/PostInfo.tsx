import React from 'react';
import { UserInfo } from '../UserInfo';
import { CopyPost } from '../../types/CopyPost';

type Props = {
  post: CopyPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <UserInfo users={post.user} />
    </div>
    <p className="PostInfo__body">{post.body}</p>
  </>
);
