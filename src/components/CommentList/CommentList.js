import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';
import { CommentTypes } from '../PropTypes';

export const CommentList = ({ comments }) => (
  <ul className="list-group">
    {comments.map(comment => (
      <li
        key={comment.id}
        className="
          list-group-item
          list-group-item-primary
          list-group-item-action
        "
      >
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
};
