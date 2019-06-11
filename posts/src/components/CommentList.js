import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  const postCommentsList = props.postComments.map(comment => <Comment {...comment} key={comment.id} />);
  return (
    <div>{postCommentsList}</div>
  );
}

export default CommentList;
