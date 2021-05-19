import React from 'react';

const Comment = ({ name, email, body}) => (
  <li>
    <h3>
      {name}
    </h3>
    <div>
      {email}
    </div>
    <p>
      {body}
    </p>
  </li>
);

export default Comment;
