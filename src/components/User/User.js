import React from 'react';
import { ShapeUser } from '../Shapes/ShapeUser';
import './User.css';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__name">
      {name}
    </div>
    <a href="mailto" className="user__email">
      {email}
    </a>
    <div className="user___address">
      {`${address.street}, ${address.city}`}
    </div>
  </div>
);

User.propTypes = ShapeUser.isRequired;
