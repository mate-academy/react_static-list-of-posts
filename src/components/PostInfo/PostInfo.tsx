import React from 'react';

import './PostInfo.scss';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    id,
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="post" key={id}>
      <p className="post__title">
        {title}
      </p>
      <p className="post__body">
        {`"${body}"`}
      </p>
      {user ? <UserInfo user={user} /> : <p>No user</p>}
      <CommentList comments={comments} />
    </div>
  );
};
