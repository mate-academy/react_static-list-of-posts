import React from 'react';
import Comment from "../Comment/Comment";
import PropTypes from 'prop-types';

function CommentList({comments}) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment {...comment}/>
        </li>
      ))}
    </ul>
  )
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CommentList;
