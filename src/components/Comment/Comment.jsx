import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ userComment }) => (
  <div className="comment">
    <h4>
      {userComment.name}
    </h4>
    <div>
      {`User: ${userComment.email}`}
    </div>
    <div>
      {`Comment : ${userComment.body}`}
    </div>
  </div>
);

Comment.propTypes = {
  userComment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
