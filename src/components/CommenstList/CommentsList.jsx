import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentsList.scss';

export const CommentList = ({ comments }) => (
  comments.map(comment => (
    <div key={comment.id}>
      <Comment {...comment} />
    </div>
  ))
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};
