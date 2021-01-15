import React from 'react';

import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => {
  return(
  <div>
    <table className="table">
      <tbody>
        <tr>
          <th className="table__cell">Name</th>
          <th className="table__cell">Email</th>
          <th className="table__cell">Street</th>
          <th className="table__cell">Suite</th>
          <th className="table__cell">City</th>
          <th className="table__cell">Zipcode</th>
        </tr>
        <tr>
          <td className="table__cell">{name}</td>
          <td className="table__cell">{email}</td>
          <td className="table__cell">{address.street}</td>
          <td className="table__cell">{address.city}</td>
          <td className="table__cell">{address.suite}</td>
          <td className="table__cell">{address.zipcode}</td>
        </tr>
      </tbody>
    </table>
  </div>
);
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  })
};
