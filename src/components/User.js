import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name, email, address }) => (
  <>
    <p className="cardText">
      <big className="textMuted">
        <strong>Name: </strong>
        {name}
        <strong> Email: </strong>
        <cite title="Source Title">
          {email}
        </cite>
        <p>
          <strong>City: </strong>
          {address.city}
          <strong> Street: </strong>
          {address.street}
        </p>
      </big>
    </p>
  </>
);

User.propTypes = UserShape;
