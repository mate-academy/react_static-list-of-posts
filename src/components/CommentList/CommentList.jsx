import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentType } from '../types';

export const CommentList = function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id} className="box">
          {`Comment id: #${comment.id}`}
          <Comment
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ))}
    </ul>
  );
};

CommentList.propTypes = PropTypes.arrayOf(PropTypes.shape(CommentType));
