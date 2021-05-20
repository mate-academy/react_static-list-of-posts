import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email}) => (
  <div>
    <p>{body}</p>
    <p>
      {name}
      <br />
      <a href={`mailto: ${email}`}>{email}</a>
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
