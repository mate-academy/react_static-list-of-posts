import React from 'react';
import { CommentPropTypes } from '../propTypes/comment';

export function Comment({ body, name }) {
  return (
    <div className="comment">
      <p className="comment__user-name">
        {name}
        :
      </p>
      <p className="comment__text">{body}</p>
    </div>
  );
}

Comment.propTypes = CommentPropTypes;
