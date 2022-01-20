import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { PreparedPost } from '../../types/PreparedPost';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <>
      {title}
      {user && <UserInfo {...user} />}
      {body}

      <CommentList comments={comments} />
    </>
  );
};
