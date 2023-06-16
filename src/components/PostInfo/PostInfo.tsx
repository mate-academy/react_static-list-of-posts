import React from 'react';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import { Post } from '../../types/Post';

import './PostInfo.scss';

type Props = {
  post: Omit<Post, 'id' | 'userId'>;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>
      {user && (
        <UserInfo user={user} />
      )}
    </div>
    <p className="PostInfo__body">
      {body}
    </p>
    {comments.length > 0
      ? (<CommentList comments={comments} />)
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
  </div>
);
