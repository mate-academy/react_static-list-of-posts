import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentList({ commentsData }) {
  return (
    <div>
      {commentsData.map(comment => (
        <Comment comm={comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  commentsData: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object])).isRequired,
};

export default CommentList;
