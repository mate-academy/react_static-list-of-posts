import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

import './commentList.scss';

export const CommentList = ({ comments }) => (
  <ol className="commentList">
    {comments.map(comment => (
      <li key={comment.id} className="commentList__element">
        <Comment {...comment} />
      </li>
    ))}
  </ol>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
