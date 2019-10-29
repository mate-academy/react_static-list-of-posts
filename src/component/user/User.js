import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  return (
    <>
      {props.name.name}
    </>
  );
}

User.propTypes = {
  name: PropTypes.isRequired,
};

export default User;
