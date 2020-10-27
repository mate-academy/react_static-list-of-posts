import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

export const Comment = ({ name, email, body }) => (
  <div className="card-footer">
    <blockquote className="blockquote mb-0">
      <div className="cardText">
        <small className="textMuted">
          <p style={{ textAlign: 'right' }}>
            <strong> Email: </strong>
            <cite title="Source Title">
              {email}
            </cite>
          </p>
        </small>
      </div>
      <footer className="blockquote-footer">{body}</footer>
    </blockquote>
  </div>
);

Comment.propTypes = CommentShape.isRequired;
