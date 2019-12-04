import React from 'react';
import Comment from './Comment';

const CommentList = props => props.comments.map(commentData => (
  <Comment comment={commentData} />
));

export default CommentList;
