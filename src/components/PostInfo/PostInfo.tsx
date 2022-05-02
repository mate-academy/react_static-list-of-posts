import React from 'react';
import { PreparedPost } from '../../types/types';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
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

      <p data-cy="post-body" className="PostInfo__body">{body}</p>

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
            : 'No data about user'
        }
      </div>
    </div>

    <CommentList
      comments={comments}
    />

  </li>
);
