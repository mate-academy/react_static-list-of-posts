/* eslint-disable react/prop-types */
import React from 'react';

const User = props => (
  <div className="author">
    <span className="author__name">
      {props.postAuthor.name}
    </span>
    <span className="author__email">
      {props.postAuthor.email}
    </span>
  </div>
);

export default User;
