import React from 'react';
import { commentsShape }
  from '../../api/preparedPostsShape';
import { Comment } from '../Comment/Comment';

const CommentList = ({ comments }) => (
  comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ))
);

CommentList.propTypes = {
  commentsShape,
};

export { CommentList };
