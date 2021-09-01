import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { PreparedPost } from '../../types/PreparedPost';
import './PostInfo.scss';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    body,
    user,
    writtenComments,
  } = post;

  return (
    <div className="post">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__body">
        {body}
      </p>
      {user && (
        <UserInfo user={user} />
      )}
      <CommentInfo comments={writtenComments} />
    </div>
  );
};
