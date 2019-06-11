import React from 'react'; 

function CommentHandler(props) {
  return (
    <div className="comment-item">
      <div className="comment-body">{props.commentBody}</div>
      <div className="comment-author">{props.commentAuthor}</div>
    </div>
  );
}

export default CommentHandler;

