import React from 'react';

import './PostInfo.scss';

import { CommentList } from '../CommentList/index';

import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';

type Props = {
  post:Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    title,
    comments,
    body,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      <CommentList comments={comments} />
    </div>
  );
};
