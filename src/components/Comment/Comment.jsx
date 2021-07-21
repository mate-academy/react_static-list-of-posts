import React from 'react';
import { TypeComment } from '../../types';

export const Comment = ({ comment }) => (
  <>
    <div className="card-header">
      <strong>{comment.name}</strong>
      <p>{comment.body}</p>
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <footer className="blockquote-footer">
          {comment.email}
        </footer>
      </blockquote>
    </div>
  </>
);

Comment.propTypes = {
  comment: TypeComment.isRequired,
};
