import React from 'react';

import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { PostInfoType } from '../../types/PostInfo';

type Props = {
  post: PostInfoType,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    comments,
    title,
    body,
  } = post;

  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {(comments.length > 0)
        ? (
          <div className="CommentList">
            <CommentList
              comments={comments}
            />
          </div>
        )
        : (
          <b data-cy="NoCommentsMessage">
            No comments yet
          </b>
        )}
    </>
  );
};
