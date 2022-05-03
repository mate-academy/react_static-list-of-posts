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
  <li className="postInfo" data-cy="post-info">
    <div className="postInfo__block">
      <h2 data-cy="post-title" className="postInfo__title">{title}</h2>

      <p data-cy="post-body" className="postInfo__body">{body}</p>

      <div className="postInfo__user">
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
