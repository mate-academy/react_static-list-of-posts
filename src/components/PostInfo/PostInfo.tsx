import React from 'react';
import './PostInfo.scss';

import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comment,
  } = post;

  return (
    <li className="PostInfo">
      <div className="PostInfo__header">
        {title && (
          <h3 className="PostInfo__title">{title}</h3>
        )}

        { user && <UserInfo user={user} /> }
      </div>

      {body && (
        <p className="PostInfo__body">
          {body}
        </p>
      )}

      {comment?.length
        ? (
          <CommentList comment={comment} />
        )
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </li>
  );
};
