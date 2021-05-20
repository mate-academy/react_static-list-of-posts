import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <span className="commentName">Name: {name} </span>
    <span className='commentEmail'>Email: {email}</span>
    <p className="commentTxt">
      {body}
    </p>
  </>
)

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
