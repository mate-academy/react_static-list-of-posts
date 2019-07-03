import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  return (
    <div className="comment-list__comment">
      <p><span>Comment {props.comment.id}: </span> {props.comment.name}</p>
      <div>{props.comment.body}</div>
      <p>{props.comment.email}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
