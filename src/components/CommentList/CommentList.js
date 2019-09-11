import React from 'react';

import Comment from '../Comment/Comment';
import { CommentListProps } from '../PropTypes/PropTypes';
import './CommentList.css';

const CommentList = ({ commentList }) => (
  <div className="comment-list">
    {commentList.map(comment => (
      <Comment comment={comment.body} email={comment.email} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = CommentListProps;

export default CommentList;
