import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ name, body, email }) => (
  <div className="comments">
    <p>
      <strong>{name}</strong>
    </p>
    <p>{body}</p>
    <i>{email}</i>
    <br />
  </div>
);

Comments.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comments;
