import React from 'react';
import PropTypes from 'prop-types';

const Coomment = ({ name, body, email }) => (
  <>
    <p>
      <b>{name}</b>
    </p>
    <a href={`mailto:${email}`}>
      {email}
    </a>
    <p>{body}</p>
  </>
);

Coomment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Coomment;
