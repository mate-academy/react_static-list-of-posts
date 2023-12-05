import React from 'react';
import { PostInfoProps } from '../../types';
import { UserInfo } from '../UserInfo';

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {post.user && <UserInfo user={post.user} />}
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
    </div>
  </>
);
