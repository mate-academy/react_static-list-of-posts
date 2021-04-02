import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export const User = ({
  name,
  email,
  address,

}) => (
  <>
    <Card
      border="success"
      style={{ width: '25%' }}
      className="ml-4"
    >
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>{email}</Card.Text>
        <Card.Text>
          {`${address.zipcode}
      City:  
      ${address.city} 
      Street:
      ${address.street}
      /
      ${address.suite}`}
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
