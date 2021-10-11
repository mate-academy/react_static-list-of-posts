import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

type Props = {
  preparedPost: Post;
};

export const PostInfo: React.FC<Props> = ({ preparedPost }) => {
  const {
    title,
    body,
    user,
    comments,
  } = preparedPost;

  return (
    <div className="Post">
      <h2 className="Post__title">
        {title}
      </h2>
      <p className="Post__body">
        {body}
      </p>
      {user && <UserInfo user={user} />}
      {comments && <CommentList comments={comments} />}
    </div>
  );
};
