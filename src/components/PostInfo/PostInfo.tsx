import React from 'react';
import './PostInfo.scss';

import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="post" data-cy="post-info">
      <div className="post__flex">
        <h1 className="post__title" data-cy="post-title">
          {title}
        </h1>

        <p className="post__body" data-cy="post-body">
          {body}
        </p>

        <UserInfo user={user} />
      </div>

      <CommentList comments={comments} />
    </div>
  );
};
