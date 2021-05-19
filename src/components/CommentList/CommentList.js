import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentList.css';

function CommentList({ comments }) {
  return (
    <div>
      {comments
        .map(comment => (<Comment comment={comment} key={comment.id} />))
      }
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf({
    comment: PropTypes.shape({
      body: PropTypes.string,
      email: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default CommentList;
