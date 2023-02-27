import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { PostType } from '../../types/PostType';

type Props = {
  post: PostType;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comment,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {
        comment.length > 0
          ? <CommentList comment={comment} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }
    </div>
  );
};
