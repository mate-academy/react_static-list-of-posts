import React from 'react';
import Comment from './Comment';

export default function CommentList(props) {
  const comments = props.commentsList.map(currComment => {
    return <Comment info={currComment} />;
  });
  return comments;
}
