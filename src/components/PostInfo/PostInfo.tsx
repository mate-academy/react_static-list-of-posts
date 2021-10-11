import React from 'react';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, comment,
  } = post;

  return (
    <>
      <h2>{title}</h2>
      <article>{body}</article>
      {user && <UserInfo user={user} />}
      {comment && <CommentList comments={comment} />}
    </>
  );
};
