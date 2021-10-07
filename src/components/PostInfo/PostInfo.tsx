import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export type Props = {
  element: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { element } = props;
  const {
    title,
    body,
    user,
    comments,
  } = element;

  return (
    <>
      <h2 className="list__title">
        {title}
      </h2>
      <p className="list__text">
        {body}
      </p>
      <div className="section">
        {user && <UserInfo user={user} />}
        {comments && <CommentList comments={comments} />}
      </div>
    </>
  );
};
