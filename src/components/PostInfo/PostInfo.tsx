import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    id,
    title,
    body,
    comments,
    user,
  } = post;

  return (
    <div
      className="PostInfo"
      key={id}
    >
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user ? (<UserInfo user={user} />) : ''}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments?.length ? (
        <CommentList comments={comments} />
      ) : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">
            No comment yet
          </b>
        </>
      )}
    </div>
  );
};
