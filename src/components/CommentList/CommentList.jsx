import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.scss';

import Comment from '../Comment/Comment';

const CommentList = function({ comments }) {
  return (
    <ul className="CommentList">
      {comments.map(comment => <Comment {...comment} />)}
    </ul>
  );
};

CommentList.propTypes = {
  // eslint-disable-next-line
  comments: PropTypes.object.isRequired,
};

export default CommentList;
