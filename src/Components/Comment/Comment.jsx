import React from 'react';
import { CommentType } from '../CommentType/CommentType';

export default function Comment({ comment }) {
  return (
    <li>
      <h3>
        {comment.name}
      </h3>
      <p>
        {comment.body}
      </p>
      <a href={`malito:${comment.email}`}>
        {comment.email}
      </a>
    </li>
  );
}

Comment.propTypes = {
  comment: CommentType.isRequired,
};
