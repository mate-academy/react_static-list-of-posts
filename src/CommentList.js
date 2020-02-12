import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <React.Fragment>
    {comments.map(comment => (
      <Comment key={comment.id} oneComment={comment} />
    ))}
  </React.Fragment>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
