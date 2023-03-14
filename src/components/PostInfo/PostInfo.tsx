import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Posts } from '../../types/Posts';
import './PostInfo.scss';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
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

      {comments.length === 0
        ? (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
        : <CommentList comments={comments} />}
    </div>
  );
};
