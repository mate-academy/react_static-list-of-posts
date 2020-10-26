import React from 'react';

import { CommentPropTypes } from './propTypes/CommentPropTypes';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <div className="comment__author">
      {`${name.slice(0, 15)} — ${email}`}
    </div>
    <p className="comment__text">
      {body}
    </p>
  </>
);

Comment.propTypes = CommentPropTypes;
