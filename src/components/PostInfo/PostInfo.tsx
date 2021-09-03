import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;

  const {
    user,
    title,
    body,
    comments,
  } = post;

  return (
    <div className="post-info">
      <div className="post-info__wrapper">
        {user
          ? <UserInfo user={user} />
          : 'User does not exist'}

        <h2 className="post-info__title">
          {title}
        </h2>

        <p className="post-info__body">
          {body}
        </p>
      </div>

      <CommentList comments={comments} />
    </div>
  );
};
