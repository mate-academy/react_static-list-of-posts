import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { CommentShape } from '../propTypes/CommentShape';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
