import React from 'react';
import Comment from '../Comment/Comment';

function CommentList(props) {
  // eslint-disable-next-line react/prop-types
  const { commentList } = props;

  return (
    <ul className="comment-list">
       Comments:
      {commentList.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}

export default CommentList;
