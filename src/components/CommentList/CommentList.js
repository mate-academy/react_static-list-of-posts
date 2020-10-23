import React from 'react';
import Comment from '../Comment/Comment';
import CommentListShape from '../../shapes/CommentListShape';

const CommentList = ({ comments }) => (
  comments.map(comment => (
    <Comment {...comment} key={comment.id} />
  ))
);

CommentList.propTypes = CommentListShape;

export default CommentList;
