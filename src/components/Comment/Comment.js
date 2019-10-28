import React from 'react';

function Comment(props) {
  // eslint-disable-next-line react/prop-types
  const { comment } = props;

  return (
    <li className="comment">
      <p className="comment-body">{comment.body}</p>
      <p className="comment-author">{`${comment.name}, ${comment.email}`}</p>
    </li>
  );
}

export default Comment;
