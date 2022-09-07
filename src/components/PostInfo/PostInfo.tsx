import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../types/Post';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <UserInfo user={user} />
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {
      comments.length > 0
        ? <CommentList comments={comments} />
        : <b>No comments yet</b>
    }
  </div>
);
