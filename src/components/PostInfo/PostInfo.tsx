import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    body,
    comment,
    title,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user
          && (
            <p>
              {' Posted by  '}

              <UserInfo user={user} />
            </p>
          )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {!comment.length ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comment={comment} />
      )}
    </div>
  );
};
