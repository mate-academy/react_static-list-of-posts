import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';
import Comment from '../Comment';

function CommentList({ commentList }) {
  return (
    <ul className="commentList">
      {
        commentList
          .map(comment => <li key={comment.id}><Comment {...comment} /></li>)
      }
    </ul>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

export default CommentList;
