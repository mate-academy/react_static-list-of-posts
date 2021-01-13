import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentList.scss';
import { CommentType } from '../../types';

const CommentList = ({ commentList }) => (
  <div className="comment-list">
    <h3>Comments:</h3>
    {commentList.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(CommentType).isRequired,
};

export default CommentList;
