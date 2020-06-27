import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { UserPropShape } from './UserPropShape';

export const User = (props) => {
  const { name, email, address } = props;
  const { street, city, zipcode } = address;

  return (
    <Alert variant="info">
      <Alert.Heading>
        <p>{name}</p>
        <p>{email}</p>
      </Alert.Heading>
      <hr />
      <p>{street}</p>
      <p>{city}</p>
      <p>{zipcode}</p>
    </Alert>
  );
};

User.propTypes = UserPropShape;
