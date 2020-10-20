import React from 'react';
import { commentSmallShape } from '../../shapes/commentShape';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h4 className="comment__name">
      {name}
    </h4>
    <p className="comment__email">
      {`Email: ${email}`}
    </p>
    <h5 className="comment__body">
      {body}
    </h5>
  </div>
);

Comment.propTypes = commentSmallShape;
