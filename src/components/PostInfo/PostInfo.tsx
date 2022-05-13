import React from 'react';
import { PropType } from '../../types/PropType';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: PropType,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <UserInfo userInfo={post.user} />
    <p className="post__title" data-cy="post-title">
      <b>
        <i>
          {post.title}
        </i>
      </b>
    </p>
    <p className="post__body" data-cy="post-body"><b>{post.body}</b></p>
  </div>
);
