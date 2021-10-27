import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo: React.FC<PreparedPost> = (post) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <UserInfo user={user} comments={comments} />
    </>
  );
};
