import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="post__commentList commentList">
    {comments.map(comment => (
      <div className="commentList__comment comment">
        <Comment {...comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
