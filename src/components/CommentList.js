import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li>
        <Comment comment={comment} key={comment.id} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
