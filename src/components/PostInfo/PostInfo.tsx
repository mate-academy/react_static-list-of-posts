import React from 'react';

import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, userLink, commentLink,
  } = post;

  return (
    <>
      <h2>{title}</h2>
      <article>{body}</article>
      {userLink && <UserInfo user={userLink} />}
      {commentLink && <CommentList comments={commentLink} />}
    </>
  );
};
