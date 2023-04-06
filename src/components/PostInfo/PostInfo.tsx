import React from 'react';
import { Posts } from '../../types/Posts';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

type Props = {
  post: Posts
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, comments,
  } = post;

  const checkingСomments = comments.length
    ? <CommentList comments={comments} />
    : <b data-cy="NoCommentsMessage">No comments yet</b>;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {user && <UserInfo user={user} />}
      </div>
      <p className="PostInfo__body">{body}</p>
      {checkingСomments}
    </div>
  );
};
