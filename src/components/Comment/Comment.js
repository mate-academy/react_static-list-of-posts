import React from 'react';
import { CommentShape } from '../../shapes';
import './Comment.css';

export const Comment = ({ name, body, email }) => (
  <div className="App__comment">
    <p>
      <strong>
        Comment
      </strong>
      {' : '}
      {body}
      {', '}
      <p>
        <strong>
          Comment  from
        </strong>
        {' : '}
        {name}
        {', '}
      </p>
      <strong>
        Email
      </strong>
      {' : '}
      {email}
    </p>
  </div>
);

Comment.propTypes = CommentShape;
