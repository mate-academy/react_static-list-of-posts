import React from 'react';
import PropTypes from 'prop-types';

export const Comments = ({id, name, body, email}) => (
  <>
      <h3>{id}. {name}</h3>
      <p>{body}</p>
      <p>{email}</p>
  </>
);

Comments.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}
