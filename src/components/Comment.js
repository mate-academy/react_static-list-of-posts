import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <div className="App__comment">
    <div className="App__comment-title">
      {name}
    </div>
    <div className="App__comment-body">
      {body}
    </div>
    <div className="App__comment-email">
      {email}
    </div>
  </div>
);

Comment.propTypes = CommentShape;
