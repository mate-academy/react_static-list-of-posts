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
      <li className="list-group-item list-group-item-primary">{title}</li>
      <li className="list-group-item list-group-item-primary">{body}</li>
      <li className="list-group-item list-group-item-primary"><UserInfo user={user} /></li>
      <li className="list-group-item list-group-item-primary"><CommentList comments={comments} /></li>
    </>
  );
};
