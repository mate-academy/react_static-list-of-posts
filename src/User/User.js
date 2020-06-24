import React from 'react';
import './User.css';
import { userShape } from '../shapes';

const User = ({ name, email, address }) => (
  <div className="post__author">
    <span className="post__author-info">
      <span>Name: </span>
      {name}
    </span>
    <span className="post__author-info">
      <span>Email: </span>
      {email}
    </span>
    <br />
    <span>Address: </span>
    <span className="post__author-info">{address.city}</span>
    <span className="post__author-info">{address.street}</span>
    <span className="post__author-info">{address.suite}</span>
    <span className="post__author-info">{address.zipcode}</span>
    <br />
    <span>Location: </span>
    <span className="post__author-info">{address.geo.lat}</span>
    <span className="post__author-info">{address.geo.lng}</span>
  </div>
);

User.propTypes = userShape.isRequired;

export { User };
