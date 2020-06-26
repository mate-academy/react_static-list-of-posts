import React from 'react';
import PropTypes from 'prop-types';
import { authorAddressShape } from './Shapes';
import './Author.css';

export const Author = (props) => {
  const { name, email, address } = props;

  return (
    <div className="card">
      <div className="card-header">
        <pre>
          Author:
          <b>{name}</b>
        </pre>

      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <a href={`mailto: ${email}`} className="card-link">
            Mail to Author
          </a>
          <a
            href={
              `https://www.google.com/maps/?q=
              ${address.geo.lat},${address.geo.lng}`
            }
            className="card-link"
          >
            See on Map
          </a>
        </blockquote>
      </div>
    </div>
  );
};

Author.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: authorAddressShape.isRequired,
};
