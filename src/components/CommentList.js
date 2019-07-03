import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

function CommentList(props) {
  return (
    <ul className="comment-list">
      {props.comments.map(comment => (
        <Comment
          comment={comment}
        />
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
