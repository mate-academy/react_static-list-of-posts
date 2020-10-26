import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

export const Comment = ({ name, email, body }) => (
  <div className="card-footer">
    <blockquote className="blockquote mb-0">
      <p className="cardText">
        <small className="textMuted">
          <strong> Name: </strong>
          {name}
          <strong> Email: </strong>
          <cite title="Source Title">
            {email}
          </cite>
        </small>
      </p>
      <footer className="blockquote-footer">{body}</footer>
    </blockquote>
  </div>
);

Comment.propTypes = CommentShape;
