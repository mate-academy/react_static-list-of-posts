import React from 'react';
import { FullPost } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post:FullPost;
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

        <p>
          {' Posted by  '}

          {user && (
            <UserInfo user={user} />
          )}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      { comments.length
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </div>
  );
};
