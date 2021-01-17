import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

import './CommentList.scss';

export const CommentList = ({ commentsList }) => (
  <div className="CommentList">
    {commentsList.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
