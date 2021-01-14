import React from 'react';
import { CommentType } from '../../types';
import './Comment.scss';

export function Comment({ email, name, body }) {
  return (
    <div className="comment">
      <p>
        User
        <span className="comment__user-mail">
          {` ${email} `}
        </span>
        replied:
      </p>
      <p className="comment__title">{name}</p>
      <p>{body}</p>
    </div>
  );
}

Comment.propTypes = CommentType.isRequired;
