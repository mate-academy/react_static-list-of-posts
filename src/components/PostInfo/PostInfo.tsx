import React from 'react';
import { FullInfo } from '../../types/FullInfo';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface Prop {
  post: FullInfo;
}

export const PostInfo: React.FC<Prop> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {comments?.length
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
