import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h3 className="comment__title">
      {name}
    </h3>
    <p className="comment__user">
      {`${email} commented:`}
    </p>
    {body}
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
