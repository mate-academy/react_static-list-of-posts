import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentList({ currentComments }) {
  return (
    <div >
      {currentComments.map(comment => (
        <Comment currentComment={comment} />
      ))
      }
    </div>
  );
}
CommentList.propTypes = {
  currentComments: PropTypes.shape({
    post: PropTypes.string.isRequired,
  }).isRequired,
};
export default CommentList;
