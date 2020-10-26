import React from 'react';
import { commentPropTypes } from './propertiesVar';

export const Comment = ({ name, body, email }) => (
  <>
    <h4>
      {name}
    </h4>
    {body}
    <br />
    <a href="https://mail.google.com/">
      {email}
    </a>
  </>
);

Comment.propTypes = commentPropTypes;
