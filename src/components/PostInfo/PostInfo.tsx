import React from 'react';
import './PostInfo.scss';
import { GlobalPost } from '../../types/GlobalPost';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: GlobalPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comments.length > 0
          ? <CommentList comments={comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }
    </div>
  );
};
