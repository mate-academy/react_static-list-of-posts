import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ singleComment }) => {
  const { email, body } = singleComment;

  return (
    <div className="comment">
      <h5>{email}</h5>
      <h5>{body}</h5>
    </div>

  );
};

Comment.propTypes = { singleComment: PropTypes.objectOf(PropTypes) };
Comment.defaultProps = {
  singleComment: {
    email: 'no email',
    body: 'no content',
  },
};

export default Comment;
