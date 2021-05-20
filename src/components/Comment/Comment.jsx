import React from 'react';
import PropTypes from 'prop-types';
import './comment.scss';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <>
    <h3 className="comment__name">
      {name}
    </h3>

    <p className="comment__email">
      User:
      {' '}
      {email}
    </p>

    <p className="comment__body">
      {body}
    </p>
  </>
);
