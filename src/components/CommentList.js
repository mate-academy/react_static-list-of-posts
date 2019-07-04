import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments.map(comment => (
        <Comment
          commentData={comment}
        />
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
