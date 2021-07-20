import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <p className="lead">{`Name: ${name}`}</p>
    <p className="lead">{`Text: ${body}`}</p>
    <p className="lead">{`E-mail: ${email}`}</p>
  </>
);

export const CommentTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Comment.propTypes = CommentTypes;
