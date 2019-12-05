import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div className="comments">
    <ul className="list">
      {comments.map(
        oneComment => <Comment comment={oneComment} key={oneComment.id} />
      )}
    </ul>
  </div>
);

// eslint-disable-next-line object-curly-newline
CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired };

export default CommentList;
