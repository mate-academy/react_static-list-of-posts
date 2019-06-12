import React from 'react'; 

function Comment(props) {
  const {
    commentBody: commentBody,
    commentAuthor: commentAuthor
  } = props;
  return (
    <div className="comment-item">
      <div className="comment-body">{commentBody}</div>
      <div className="comment-author">{commentAuthor}</div>
    </div>
  );
}

export default Comment;

