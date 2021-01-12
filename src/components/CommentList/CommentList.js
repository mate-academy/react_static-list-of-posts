import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentList.scss';
import { commentType } from '../../types';

const CommentList = ({ commentList }) => (
  <div>
    {commentList.map(comment => (
      <div className="comment-list" key={comment.id}>
        <Comment comment={comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(commentType).isRequired,
};

export default CommentList;
