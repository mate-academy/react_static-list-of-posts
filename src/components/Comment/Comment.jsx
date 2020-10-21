import React from 'react';

import { CommentShape } from '../../shapes/CommentShape';

export const Comment = ({ name, email, body }) => (
  <div className="list-group-item border-primary">
    <div className="d-flex justify-content-between">
      <p className="card-title">{ name }</p>
      <span className="text-muted">{ email }</span>
    </div>
    <p className="card-text">{ body }</p>
  </div>
);

Comment.propTypes = CommentShape;
