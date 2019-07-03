import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Comment = ({ oneComment }) => (
  <div className="comment-list__comment">
    <User email={oneComment.email} />
    <div>
      <h4>{oneComment.name}</h4>
      <p>{oneComment.body}</p>
    </div>
  </div>
);

Comment.propTypes = {
  oneComment: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
