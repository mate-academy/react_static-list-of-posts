import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const {
    title,
    body,
    user,
    comments,
  } = props.post;

  return (
    <>
      <li>{title}</li>
      <li>{body}</li>
      <li><UserInfo user={user} /></li>
      <li><CommentList comments={comments} /></li>
    </>
  );
};
