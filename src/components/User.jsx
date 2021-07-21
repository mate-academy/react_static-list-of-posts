import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

export const User = ({
  name,
  email,
  address,
}) => {
  const { street, suite, city } = address;

  return (
    <>
      {`Author: ${name}`}
      <br />
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href={`mailto:${email}`}>{email}</Nav.Link>
        </Nav.Item>
      </Nav>
      <br />
      <p>
        {`${street} St., `}
        {suite}
        <br />
        <strong>
          {city}
        </strong>
      </p>
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
