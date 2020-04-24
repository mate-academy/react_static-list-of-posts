import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <>
    <h3>
      {name}
    </h3>
    <p>
      <strong>
        <a href={`mailot:${email}`}>
          {email}
        </a>
      </strong>
    </p>
    <p>
      {body}
    </p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
