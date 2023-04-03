import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

import { Post } from '../../types/types';

export const PostInfo: React.FC<Post> = ({
  title, body, user, comments,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        {' Posted by  '}

        {user ? <UserInfo {...user} /> : null}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    <CommentList comments={comments} />
  </div>
);
