import React from 'react';
import { CommentList } from './CommentList';

import { TypeUser, TypeComments } from '../types';

export const User = ({ user, comments }) => (
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
          <td className="table__cell">{user.name}</td>
          <td className="table__cell">{user.email}</td>
          <td className="table__cell">{user.address.street}</td>
          <td className="table__cell">{user.address.city}</td>
          <td className="table__cell">{user.address.suite}</td>
          <td className="table__cell">{user.address.zipcode}</td>
        </tr>
      </tbody>
    </table>
    <CommentList comments={comments} />
  </div>
);

User.propTypes = {
  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
};
