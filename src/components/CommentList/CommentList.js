import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

import './commentList.scss';

const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export { CommentList };
