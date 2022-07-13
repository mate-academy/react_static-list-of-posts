import React from 'react';
import './PostInfo.scss';

import { PreparedPost } from '../../types/preparedPost';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PreparedPost
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <>
      <div className="postInfo" data-cy="post-info">
        <h2 className="postInfo__title" data-cy="post-title">{title}</h2>
        <p className="postInfo__body" data-cy="post-body">{body}</p>
        <UserInfo user={user} />
        <CommentList comments={comments} />
      </div>
    </>
  );
};
