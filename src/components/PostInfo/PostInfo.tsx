import React from 'react';

import { Post } from '../types/PostInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
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
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href="mailto:Sincere@april.biz">
            {user && user.name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comment.length !== 0
        ? <CommentList comments={comment} />
        : (
          <b data-cy="NoCommentsMessage">
            No comments yet
          </b>
        )}
    </div>
  );
};
