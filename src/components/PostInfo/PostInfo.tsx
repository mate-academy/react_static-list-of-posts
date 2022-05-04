import React from 'react';
import { PreparedPost } from '../../Types/types';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo: React.FC<PreparedPost> = ({
  title,
  body,
  user,
  comments,
}) => (
  <li className="PostInfo" data-cy="post-info">
    <div className="PostInfo__block">
      <h2 data-cy="post-title" className="PostInfo__title">{title}</h2>

      <div data-cy="post-body" className="PostInfo__body">{body}</div>

      <div className="PostInfo__user">
        {
          (user)
            ? (
              <UserInfo
                id={user.id}
                name={user.name}
                email={user.email}
              />
            )
            : 'No data'
        }
      </div>
    </div>

    <CommentList
      comments={comments}
    />

  </li>
);
