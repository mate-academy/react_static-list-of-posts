import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

interface Props {
  postInfo: Post;
}

export const PostInfo: React.FC<Props> = ({ postInfo }) => {
  const {
    title,
    body,
    user,
    comment,
  } = postInfo;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && (
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

      {comment.length
        ? (
          <CommentList comments={comment} />
        ) : (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )}
    </div>
  );
};
