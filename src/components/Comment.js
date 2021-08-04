import React from 'react';

const Comment = ({ name, email, body }) => (
  <>
    <h4>
      {name}
    </h4>
    <p className="text">
      {body}
    </p>
    <a href="#">
      {email}
    </a>
  </>
);

export default Comment;
