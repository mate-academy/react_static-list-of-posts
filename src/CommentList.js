import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div>
    <ul>
      {comments.map(
        oneComment => <Comment comment={oneComment} key={oneComment.id} />
      )}
    </ul>
  </div>
);

CommentList.propTypes = {
  comments:
    PropTypes.arrayOf(PropTypes.object)
      .isRequired,
};

export default CommentList;
