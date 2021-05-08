import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ol className="comments">
    <div className="comments__title">
      Comments
    </div>
    {
      comments.map(comment => (
        <li className="comments__comment" key={comment.id}>
          <Comment {...comment} />
        </li>
      ))
    }
  </ol>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
