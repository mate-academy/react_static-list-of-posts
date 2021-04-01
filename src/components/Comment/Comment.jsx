import React from 'react';
import { CommentType } from '../../types';

export const Comment = ({ name, body, email }) => (
  <>
    <div className="comment-item__wrapper">
      <h3 className="comment-item__title">
        {name}
      </h3>
      <p className="comment-item__text">
        {body}
      </p>
      <p className="comment-item__email">
        {email}
      </p>

    </div>
  </>
);

Comment.propTypes = CommentType;
