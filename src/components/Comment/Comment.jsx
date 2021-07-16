import React from 'react';
import { commentPropTypes } from '../proptypes';

export const Comment = ({ name, email, body }) => (
  <>
    <div className="post__comment-info">
      <h3>{name.toUpperCase()}</h3>
      <p className="post__comment-email">{`Email: ${email}`}</p>
    </div>
    <p>{body}</p>
  </>
);

Comment.propTypes = commentPropTypes;
