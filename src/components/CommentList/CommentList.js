import React from 'react';
import PropTypes from 'prop-types';
import { typeComment } from '../../types';
import { Comment } from '../Comment/Comment';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="comments post__comments">
    <h2 className="comments__title">Comments</h2>
    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(typeComment).isRequired,
};
