import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export function Comment({ name, email, body }) {
  return (
    <>
      <p className="emailComment">
        {email}
      </p>
      <p className="commentTitle">
        {name}
      </p>
      <p className="commnetBody">
        {body}
      </p>
    </>
  );
}

export const commentsType = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
};

Comment.propTypes = {
  name: commentsType.name.isRequired,
  email: commentsType.email.isRequired,
  body: commentsType.body.isRequired,
};
