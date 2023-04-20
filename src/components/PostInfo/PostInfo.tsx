import React from 'react';

import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';

interface Props {
  post: Post;
}

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
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && (
          <p>
            {' Posted by  '}

            <a className="UserInfo" href={`mailto:${user?.email}`}>
              {user?.name}
            </a>
          </p>
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comment.length
        ? <CommentList comments={comment} />
        : (
          <b data-cy="NoCommentsMessage">
            No comments yet
          </b>
        )}
    </div>
  );
};
