import React from 'react';
import './User.scss';
import { UserType } from '../../types';

export function User({ user }) {
  const { name, email } = user;
  const { city, street, suite, zipcode } = user.address;

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th className ='table__cell'>
              Name
            </th>
            <th className ='table__cell'>
              Email
            </th>
            <th className ='table__cell'>
              City
            </th>
            <th className ='table__cell'>
              Street
            </th>
            <th className ='table__cell'>
              Suite
            </th>
            <th className ='table__cell'>
              ZipCode
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className ='table__cell'>
              {name}
            </td>
            <td className ='table__cell'>
              {email}
            </td>
            <td className ='table__cell'>
              {city}
            </td>
            <td className ='table__cell'>
              {street}
            </td>
            <td className ='table__cell'>
              {suite}
            </td>
            <td className ='table__cell'>
              {zipcode}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

User.propTypes = UserType.isRequired;
