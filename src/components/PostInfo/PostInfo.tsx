import React from 'react';

import './PostInfo.scss';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <li className="posts__post post" data-cy="post-info">
      <h2 className="post__content post__title" data-cy="post-title">
        {title}
      </h2>

      <UserInfo user={user} />

      <p className="post__content post__body" data-cy="post-body">
        {body}
      </p>

      <CommentList comments={comments} />
  </li>
  );

};
