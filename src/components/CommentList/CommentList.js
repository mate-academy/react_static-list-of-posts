import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <ul className="list-group">
    {comments.map(comment => (
      <li
        key={comment.id}
        className="list-group-item
        list-group-item-primary
        list-group-item-action"
      >
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.shape().isRequired,
};

export default CommentList;
