import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../comment';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="comments-list">
    {comments.map(comment =>
      <Comment {...comment} key={comment.id} />
    )}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  )
};
