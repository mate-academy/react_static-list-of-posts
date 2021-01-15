import React from 'react';
import './Comment.scss';
import { typeComment } from '../../types';

const Comment = ({ comment }) => (
  <li className="singleComment" key={comment.id}>
    <p>
      Written by:
      {` ${comment.email}`}
    </p>

    <div className="singleComment__content">
      <h4>
        {comment.name}
      </h4>

      <p>
        {comment.body}
      </p>
    </div>
  </li>
);

Comment.propTypes = { comment: typeComment.isRequired };

export default Comment;
