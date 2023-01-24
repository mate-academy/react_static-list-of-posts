import React from 'react';
import { TotalPostInfo } from '../../types/TotalPostInfo';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: TotalPostInfo;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <li className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <p>
          {'Posted by '}
          {user && <UserInfo user={user} />}
        </p>
      </div>
      <p className="PostedInfo__body">{body}</p>
      <hr />
      <CommentList comments={comments} />
    </li>
  );
};
