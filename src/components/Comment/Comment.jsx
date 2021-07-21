import React from 'react';
import { CommentPropTypes } from '../../types';

export const Comment = ({ name, body, email }) => (
  <>
    <div className="message-header">
      {`${name}: ${email}`}
    </div>
    <div className="message-body">{body}</div>
  </>
);

Comment.propTypes = CommentPropTypes;
