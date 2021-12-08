import React from 'react';
import { Post } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <article className="PostInfo">
    <div className="PostInfo__info">
      <p className="PostInfo__info-title">
        User:
      </p>
      {user && <UserInfo user={user} />}
      <h2 className="PostInfo__title">{title.toUpperCase()}</h2>
      <p className="PostInfo__body">
        {body}
      </p>
    </div>
    <CommentList comments={comments} />
  </article>
);
