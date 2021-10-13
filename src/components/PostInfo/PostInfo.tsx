import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentsList } from '../CommentsList';
import './PostInfo.scss';

type Props = {
  element: Post;
};

export const PostInfo: React.FC <Props> = (props) => {
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
      <p className="list__body">
        {body}
      </p>
      <div className="section">
        {user && <UserInfo user={user} />}
        {comments && <CommentsList comments={comments} />}
      </div>
    </>
  );
};
