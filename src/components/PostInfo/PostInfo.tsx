import React from 'react';
import './PostInfo.scss';
import { ExtendedPost } from '../../typedefs';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: ExtendedPost
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, comments,
  } = post;

  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>
      <UserInfo user={user} />
      <CommentList comments={comments} />
    </div>
  );
};
