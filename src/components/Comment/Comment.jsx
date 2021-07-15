import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <>
    <div className="post__coments">
      <h3>{name.toUpperCase()}</h3>
      <p>{`Email: ${email}`}</p>
    </div>
    <p>{body}</p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
