import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ oneComment }) => (
  <div className="comments">

    <p>{`💬 ${oneComment.body}`}</p>
    <div className="comments-email">
      <p>{`👴🏼 ${oneComment.name}`}</p>
      <a href={oneComment.email}>{`📧 ${oneComment.email}`}</a>
    </div>

  </div>
);

Comment.propTypes = {
  oneComment: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
