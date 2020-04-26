import React from 'react';
import Comment from './Comment/Comment';

const CommentList = ({ comments }) => (
  comments.map(item => <Comment key={item.id} {...item} />)
);

export default CommentList;
