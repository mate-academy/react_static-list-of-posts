import React from 'react';
import './PostInfo.scss';

import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="PostInfo" data-cy="post-info">
    <h2 className="PostInfo__title" data-cy="post-title">
      {title}
    </h2>
    <div className="PostInfo__body" data-cy="post-body">
      <div className="PostInfo__description">
        <p className="PostInfo__description-header">
          {'Description: '}
        </p>
        <p className="PostInfo__description-body">
          {body}
        </p>
      </div>
      <div className="PostInfo__userdata">
        <span className="PostInfo__userdata-header">User data:</span>
        <span>
          {(user === null)
            ? 'No user info'
            : <UserInfo {...user} />}
        </span>
      </div>
      <div className="PostInfo__comment">
        <span className="PostInfo__comment-header">{'Comments: '}</span>
        <CommentList commentsList={comments} />
      </div>
    </div>
  </div>
);
