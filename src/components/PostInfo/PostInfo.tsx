import React from 'react';
import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { PreparedPost } from '../../types/interfaces';

type PostInfoType = {
  post: PreparedPost;
};

export const PostInfo: React.FC<PostInfoType> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <li className="PostInfo" data-cy="post-info">
      <div className="PostInfo__block">
        <h2 data-cy="post-title" className="PostInfo__title">{title}</h2>
        <p className="PostInfo__body" data-cy="post-body">{body}</p>

        <div className="PostInfo__user">
          {
            (user)
              ? (
                <UserInfo
                  user={user}
                />
              ) : 'No data about user'
          }
        </div>
      </div>

      <CommentList
        comment={comments}
      />
    </li>
  );
};
